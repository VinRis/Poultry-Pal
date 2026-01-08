'use server';

import { z } from 'zod';
import {
  diagnoseChickenDiseaseFromImage,
  type DiagnoseChickenDiseaseFromImageOutput,
} from '@/ai/flows/diagnose-chicken-disease-from-image';

import { diagnoseChickenDiseaseFromText } from '@/ai/flows/diagnose-chicken-disease-from-text';

const imageSchema = z.object({
  photoDataUri: z.string(),
});

const textSchema = z.object({
    description: z.string().min(10, 'Please provide a more detailed description.'),
});

export type FormState = {
  message: string;
  result: DiagnoseChickenDiseaseFromImageOutput | null;
  success: boolean;
  isTextDiagnosis?: boolean;
} | null;

export async function handleImageDiagnosis(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    // Reset state for new diagnosis
    if (!formData.get('photoDataUri')) {
      return null;
    }
    
    const validatedFields = imageSchema.safeParse({
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

export async function handleTextDiagnosis(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
     const validatedFields = textSchema.safeParse({
      description: formData.get('description'),
    });

    if (!validatedFields.success) {
      return {
        message: validatedFields.error.flatten().fieldErrors.description?.[0] || 'Invalid form data.',
        result: null,

        success: false,
      };
    }

    const result = await diagnoseChickenDiseaseFromText(validatedFields.data);

    return {
      message: 'Diagnosis successful.',
      result: result,
      success: true,
      isTextDiagnosis: true,
    };

  } catch (error) {
     console.error('Diagnosis Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return {
      message: `An error occurred during diagnosis. ${errorMessage}`,
      result: null,
      success: false,
      isTextDiagnosis: true,
    };
  }
}
