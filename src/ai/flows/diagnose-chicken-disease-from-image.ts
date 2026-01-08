'use server';

/**
 * @fileOverview Diagnoses chicken diseases from an image of a sick chicken or its droppings.
 *
 * - diagnoseChickenDiseaseFromImage - A function that handles the chicken disease diagnosis process from an image.
 * - DiagnoseChickenDiseaseFromImageInput - The input type for the diagnoseChickenDiseaseFromImage function.
 * - DiagnoseChickenDiseaseFromImageOutput - The return type for the diagnoseChickenDiseaseFromImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DiagnoseChickenDiseaseFromImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of a sick chicken or its droppings, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' 
    ),
});
export type DiagnoseChickenDiseaseFromImageInput = z.infer<typeof DiagnoseChickenDiseaseFromImageInputSchema>;

const DiagnoseChickenDiseaseFromImageOutputSchema = z.object({
  possibleDiseases: z
    .array(z.string())
    .describe('Possible diseases that the chicken might have.'),
  possibleTreatments: z
    .array(z.string())
    .describe('Possible treatments for the diseases.'),
  confidenceLevel: z
    .number()
    .describe(
      'A number between 0 and 1 indicating the confidence level of the diagnosis.'
    ),
});
export type DiagnoseChickenDiseaseFromImageOutput = z.infer<typeof DiagnoseChickenDiseaseFromImageOutputSchema>;

export async function diagnoseChickenDiseaseFromImage(
  input: DiagnoseChickenDiseaseFromImageInput
): Promise<DiagnoseChickenDiseaseFromImageOutput> {
  return diagnoseChickenDiseaseFromImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnoseChickenDiseaseFromImagePrompt',
  input: {schema: DiagnoseChickenDiseaseFromImageInputSchema},
  output: {schema: DiagnoseChickenDiseaseFromImageOutputSchema},
  prompt: `You are an expert veterinarian specializing in diagnosing poultry illnesses. Analyze the image and provide a list of possible diseases, possible treatments, and a confidence level for the diagnosis.

Use the following image as the primary source of information about the chicken or its droppings.

Photo: {{media url=photoDataUri}}

Return your answer in JSON format.
`,
});

const diagnoseChickenDiseaseFromImageFlow = ai.defineFlow(
  {
    name: 'diagnoseChickenDiseaseFromImageFlow',
    inputSchema: DiagnoseChickenDiseaseFromImageInputSchema,
    outputSchema: DiagnoseChickenDiseaseFromImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
