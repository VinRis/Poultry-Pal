'use server';

import { z } from 'zod';
import {
  diagnoseChickenDiseaseFromImage,
  type DiagnoseChickenDiseaseFromImageOutput,
} from '@/ai/flows/diagnose-chicken-disease-from-image';

const schema = z.object({
  photoDataUri: z.string(),
});

export type FormState = {
  message: string;
  result: DiagnoseChickenDiseaseFromImageOutput | null;
  success: boolean;
} | null;

export async function handleDiagnosis(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Reset state for new diagnosis
    if (!formData.get('photoDataUri')) {
      return null;
    }
    
    const validatedFields = schema.safeParse({
      photoDataUri: formData.get('photoDataUri'),
    });

    if (!validatedFields.success) {
      return {
        message: 'Invalid form data. Please upload an image.',
        result: null,
        success: false,
      };
    }
    
    if (!validatedFields.data.photoDataUri.startsWith('data:image')) {
       return {
        message: 'Invalid image data. Please upload a valid image file.',
        result: null,
        success: false,
      };
    }

    const result = await diagnoseChickenDiseaseFromImage(validatedFields.data);

    return {
      message: 'Diagnosis successful.',
      result: result,
      success: true,
    };
  } catch (error) {
    console.error('Diagnosis Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `An error occurred during diagnosis. ${errorMessage}`,
      result: null,
      success: false,
    };
  }
}
