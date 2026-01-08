
'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import Image from 'next/image';
import {
  Upload,
  X,
  Loader2,
  Wand2,
  Camera,
  GalleryHorizontal,
  Sun,
  Scan,
  GitCompare,
  AlertTriangle,
  Info
} from 'lucide-react';
import { handleDiagnosis, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

function SubmitButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <Button type="submit" disabled={isPending} className="w-full">
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Diagnosing...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Get Diagnosis
        </>
      )}
    </Button>
  );
}

const MAX_IMAGE_SIZE = 512;

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

export default function Diagnosis() {
  const [state, setState] = useState<FormState>(null);
  const [isPending, startTransition] = useTransition();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imageDataUri, setImageDataUri] = useState<string>('');
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const formRef = useRef<HTMLFormElement>(null);

  const performDiagnosis = (formData: FormData) => {
    startTransition(async () => {
        const newState = await handleDiagnosis(state, formData);
        setState(newState);
    });
  };

  const closeCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
        videoRef.current.srcObject = null;
    }
    setIsCameraOpen(false);
  }

  useEffect(() => {
    const startCamera = async () => {
        if (isCameraOpen) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setHasCameraPermission(true);
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
                setHasCameraPermission(false);
                setIsCameraOpen(false);
                toast({
                    variant: 'destructive',
                    title: 'Camera Access Denied',
                    description: 'Please enable camera permissions in your browser settings.',
                });
            }
        }
    };

    startCamera();

    // Cleanup function to close the camera when the component unmounts or isCameraOpen becomes false
    return () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }
    };
}, [isCameraOpen, toast]);


  useEffect(() => {
    if (state?.success === false && state.message) {
      toast({
        variant: 'destructive',
        title: 'Diagnosis Failed',
        description: state.message,
      });
    }
    if (state?.success === true) {
      handleRemoveImage();
      closeCamera();
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

  const openCamera = () => {
    closeCamera(); // Ensure any existing stream is stopped
    setPreviewUrl(null);
    setImageDataUri('');
    setIsCameraOpen(true);
  };

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      
      const MAX_PREVIEW_SIZE = 512;
      let { videoWidth: width, videoHeight: height } = video;
      
      if (width > height) {
        if (width > MAX_PREVIEW_SIZE) {
          height *= MAX_PREVIEW_SIZE / width;
          width = MAX_PREVIEW_SIZE;
        }
      } else {
        if (height > MAX_PREVIEW_SIZE) {
          width *= MAX_PREVIEW_SIZE / height;
          height = MAX_PREVIEW_SIZE;
        }
      }

      canvas.width = width;
      canvas.height = height;

      const context = canvas.getContext('2d');
      context?.drawImage(video, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      
      setPreviewUrl(dataUrl);
      setImageDataUri(dataUrl);
      closeCamera();
    }
  };

  const tips = [
    { icon: Sun, title: 'Good Lighting', description: 'Ensure the bird is clearly visible.' },
    { icon: Scan, title: 'Focus on Area', description: 'Zoom in on eyes or droppings.' },
    { icon: GitCompare, title: 'Multiple Angles', description: 'Try different angles if unsure.' },
  ];
  
  const recentDiagnoses = [
    { disease: 'Newcastle Disease', date: 'Yesterday', confidence: 'High', statusIcon: <AlertTriangle className="text-destructive" /> },
    { disease: 'Coccidiosis', date: '2 days ago', confidence: 'Medium', statusIcon: <Info className="text-yellow-500" /> },
  ]

  if (state?.success && state.result) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Diagnosis Result</CardTitle>
          <CardDescription>AI-generated suggestions based on the uploaded image.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Wand2 className="text-primary"/> Possible Diseases
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {state.result.possibleDiseases.map((disease) => (
                <Badge key={disease.name} variant="secondary" className="text-base py-1 px-3">{disease.name}</Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Confidence Level</h3>
            <div className="flex items-center gap-2 mt-2">
              <Progress value={state.result.confidenceLevel * 100} className="w-full" />
              <span className="font-mono text-sm">{(state.result.confidenceLevel * 100).toFixed(0)}%</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Detailed Symptoms</h3>
             <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              {state.result.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Suggested Actions & Treatments</h3>
            <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
              {state.result.recommendedActions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
          <Alert variant="destructive" className="mt-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Disclaimer</AlertTitle>
            <AlertDescription>
              This is an AI-generated diagnosis and is not a substitute for professional veterinary advice. Always consult a qualified veterinarian for an accurate diagnosis and treatment plan.
            </AlertDescription>
          </Alert>
        </CardContent>
        <CardFooter>
            <form action={() => setState(null)} className="w-full">
                <Button type="submit" variant="outline" className="w-full">Start New Diagnosis</Button>
            </form>
        </CardFooter>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      <form ref={formRef} action={performDiagnosis}>
        <Card className="w-full">
          <input type="hidden" name="photoDataUri" value={imageDataUri} />
          <CardContent className="p-6">
            {isCameraOpen ? (
              <div className="space-y-4">
                <video ref={videoRef} className="w-full aspect-video rounded-md bg-muted" autoPlay muted playsInline />
                <div className="flex gap-4">
                  <Button onClick={closeCamera} variant="outline" className="w-full">Cancel</Button>
                  <Button onClick={takePicture} className="w-full">Take Picture</Button>
                </div>
              </div>
            ) : previewUrl ? (
              <div className="space-y-4">
                <div className="relative w-full aspect-video rounded-md overflow-hidden">
                  <Image src={previewUrl} alt="Image preview" fill className="object-contain" />
                   <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full z-10"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage();
                      }}
                    >
                      <X className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex gap-2">
                    <Button type="button" variant="outline" onClick={handleRemoveImage} className="w-full">
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isPending} className="w-full">
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Diagnosing...
                        </>
                      ) : (
                        <>
                          <Wand2 className="mr-2 h-4 w-4" />
                          Get Diagnosis
                        </>
                      )}
                    </Button>
                </div>
              </div>
            ) : (
              <div className="text-center p-8 border-2 border-dashed border-border rounded-lg space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-4 text-primary">
                    <Camera className="h-10 w-10" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Tap to upload photo</h3>
                  <p className="text-muted-foreground">Take a picture or select from gallery</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <Button type="button" onClick={openCamera} size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                    <Camera className="mr-2" />
                    Camera
                  </Button>
                  <Button type="button" onClick={() => fileInputRef.current?.click()} variant="secondary" size="lg">
                    <GalleryHorizontal className="mr-2" />
                    Gallery
                  </Button>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </form>
      <canvas ref={canvasRef} className="hidden"></canvas>
      
      <div>
        <h2 className="text-xl font-bold text-center mb-4">Tips for best results</h2>
        <div className="grid grid-cols-3 gap-2">
          {tips.map(tip => (
            <Card key={tip.title} className="bg-card">
              <CardContent className="flex flex-col items-center text-center p-3 space-y-1">
                 <div className="p-2 bg-primary/10 rounded-lg">
                  <tip.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{tip.title}</h3>
                <p className="text-xs text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Recent Diagnoses</h2>
          <Button variant="link">See All</Button>
        </div>
        <div className="space-y-2">
          {recentDiagnoses.map((item) => (
            <Card key={item.disease} className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div>
                  <p className="font-semibold">{item.disease}</p>
                  <p className="text-sm text-muted-foreground">{item.date} • {item.confidence} Confidence</p>
                </div>
              </div>
              <div>{item.statusIcon}</div>
            </Card>
          ))}
        </div>
      </div>

      <div className="text-center text-muted-foreground text-sm flex items-start justify-center gap-2 pt-4">
        <Info className="h-4 w-4 mt-0.5 shrink-0" />
        <p>This tool uses AI for preliminary diagnosis. Please consult a qualified veterinarian for confirmation and treatment.</p>
      </div>

    </div>
  );
}

    