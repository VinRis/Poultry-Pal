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

const DiseaseSchema = z.object({
  name: z.string().describe('The name of the possible disease.'),
});

const DiagnoseChickenDiseaseFromImageOutputSchema = z.object({
  possibleDiseases: z
    .array(DiseaseSchema)
    .describe('A list of possible diseases that the chicken might have.'),
  symptoms: z.array(z.string()).describe('A list of observed symptoms from the image.'),
  recommendedActions: z
    .array(z.string())
    .describe('A list of recommended actions and treatments for the diagnosed issues.'),
  confidenceLevel: z
    .number()
    .describe(
      'A number between 0 and 1 indicating the confidence level of the primary diagnosis.'
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
  prompt: `You are an expert veterinarian specializing in diagnosing poultry illnesses, particularly for farmers in East Africa. 
  
Analyze the provided image and provide a detailed diagnosis. Your response should be in JSON format.

Your analysis must include:
1.  **possibleDiseases**: Identify one or more potential diseases. For each, provide just the disease name.
2.  **symptoms**: List the specific visual symptoms you can observe in the image that support your diagnosis.
3.  **recommendedActions**: Provide a clear, actionable list of steps the farmer should take. This should include immediate supportive care, when to consult a vet, and potential common treatments available in the region.
4.  **confidenceLevel**: A numerical value from 0.0 to 1.0 representing your confidence in the most likely diagnosis.

Image to analyze: {{media url=photoDataUri}}
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
