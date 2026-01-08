'use server';

/**
 * @fileOverview Diagnoses chicken diseases from a text description of symptoms.
 *
 * - diagnoseChickenDiseaseFromText - A function that handles the chicken disease diagnosis process from text.
 * - DiagnoseChickenDiseaseFromTextInput - The input type for the diagnoseChickenDiseaseFromText function.
 * - DiagnoseChickenDiseaseFromTextOutput - The return type for the diagnoseChickenDiseaseFromText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {DiagnoseChickenDiseaseFromImageOutputSchema} from './diagnose-chicken-disease-from-image';

const DiagnoseChickenDiseaseFromTextInputSchema = z.object({
  description: z.string().describe('A description of the chicken\'s symptoms.'),
});
export type DiagnoseChickenDiseaseFromTextInput = z.infer<typeof DiagnoseChickenDiseaseFromTextInputSchema>;

export type DiagnoseChickenDiseaseFromTextOutput = z.infer<
  typeof DiagnoseChickenDiseaseFromImageOutputSchema
>;

export async function diagnoseChickenDiseaseFromText(
  input: DiagnoseChickenDiseaseFromTextInput
): Promise<DiagnoseChickenDiseaseFromTextOutput> {
  return diagnoseChickenDiseaseFromTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'diagnoseChickenDiseaseFromTextPrompt',
  input: {schema: DiagnoseChickenDiseaseFromTextInputSchema},
  output: {schema: DiagnoseChickenDiseaseFromImageOutputSchema},
  prompt: `You are an expert veterinarian specializing in diagnosing poultry illnesses, particularly for farmers in East Africa. 
  
Analyze the provided text description and provide a detailed diagnosis. Your response should be in JSON format.

Your analysis must include:
1.  **possibleDiseases**: Identify one or more potential diseases. For each, provide just the disease name.
2.  **symptoms**: List the specific symptoms you can infer from the description that support your diagnosis.
3.  **recommendedActions**: Provide a clear, actionable list of steps the farmer should take. This should include immediate supportive care, when to consult a vet, and potential common treatments available in the region.
4.  **confidenceLevel**: A numerical value from 0.0 to 1.0 representing your confidence in the most likely diagnosis.

Description to analyze: {{{description}}}
`,
});

const diagnoseChickenDiseaseFromTextFlow = ai.defineFlow(
  {
    name: 'diagnoseChickenDiseaseFromTextFlow',
    inputSchema: DiagnoseChickenDiseaseFromTextInputSchema,
    outputSchema: DiagnoseChickenDiseaseFromImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
