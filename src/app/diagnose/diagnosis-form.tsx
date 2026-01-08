'use client';

import { useState, useRef, useEffect, useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { Upload, X, Loader2, Wand2 } from 'lucide-react';
import { handleDiagnosis } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Diagnosing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Diagnose Disease
        </>
      )}
    </Button>
  );
}

const MAX_IMAGE_SIZE = 512; // Max width or height in pixels

function resizeImage(file: File, callback: (dataUrl: string) => void) {
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = document.createElement('img');
    img.onload = () => {
      const canvas = document.createElement('canvas');
      let { width, height } = img;

      if (width > height) {
        if (width > MAX_IMAGE_SIZE) {
          height *= MAX_IMAGE_SIZE / width;
          width = MAX_IMAGE_SIZE;
        }
      } else {
        if (height > MAX_IMAGE_SIZE) {
          width *= MAX_IMAGE_SIZE / height;
          height = MAX_IMAGE_SIZE;
        }
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);
      callback(canvas.toDataURL('image/jpeg'));
    };
    img.src = event.target?.result as string;
  };
  reader.readAsDataURL(file);
}


export default function DiagnosisForm() {
  const [state, formAction] = useActionState(handleDiagnosis, null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageDataUri, setImageDataUri] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.success === false && state.message) {
      toast({
        variant: "destructive",
        title: "Diagnosis Failed",
        description: state.message,
      });
    }
  }, [state, toast]);


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      resizeImage(file, (resizedDataUrl) => {
        setPreviewUrl(resizedDataUrl);
        setImageDataUri(resizedDataUrl);
      });
    }
  };

  const handleRemoveImage = () => {
    setPreviewUrl(null);
    setImageDataUri('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <Card className="max-w-md mx-auto w-full">
        <form action={formAction}>
          <input type="hidden" name="photoDataUri" value={imageDataUri} />
          <CardHeader>
            <CardTitle>Upload Image</CardTitle>
            <CardDescription>Select a clear photo for the best results.</CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="relative flex justify-center items-center w-full h-64 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
              {previewUrl ? (
                <>
                  <Image src={previewUrl} alt="Image preview" fill className="object-contain rounded-lg p-2" />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage();
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </>
              ) : (
                <div className="text-center text-muted-foreground">
                  <Upload className="mx-auto h-12 w-12" />
                  <p className="mt-2">Click to upload or drag and drop</p>
                  <p className="text-xs">PNG, JPG, GIF</p>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
      
      <div className="max-w-md mx-auto w-full">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Diagnosis Result</CardTitle>
            <CardDescription>AI-generated suggestions will appear here.</CardDescription>
          </CardHeader>
          <CardContent>
            {state?.success && state.result ? (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">Possible Diseases</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {state.result.possibleDiseases.map((disease) => (
                      <Badge key={disease} variant="secondary">{disease}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Suggested Treatments / Actions</h3>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                    {state.result.possibleTreatments.map((treatment) => (
                      <li key={treatment}>{treatment}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Confidence Level</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Progress value={state.result.confidenceLevel * 100} className="w-full" />
                    <span className="font-mono text-sm">{(state.result.confidenceLevel * 100).toFixed(0)}%</span>
                  </div>
                </div>
                <Alert variant="destructive" className="mt-6">
                  <AlertTitle>Disclaimer</AlertTitle>
                  <AlertDescription>
                    This is an AI-generated diagnosis and is not a substitute for professional veterinary advice. Always consult a qualified veterinarian for an accurate diagnosis and treatment plan.
                  </AlertDescription>
                </Alert>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                <Wand2 className="h-16 w-16" />
                <p className="mt-4">Your diagnosis results will be displayed here.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
