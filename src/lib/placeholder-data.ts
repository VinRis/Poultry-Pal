import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const placeholderImages: ImagePlaceholder[] = PlaceHolderImages;

export const breeds = [
  {
    name: 'Kienyeji',
    description: 'A popular indigenous breed in Kenya, known for its resilience and adaptability to local conditions. They are dual-purpose, good for both meat and eggs.',
    features: ['Hardy and disease-resistant', 'Free-range foragers', 'Flavorful meat and yellow-yolk eggs', 'Slower growth rate compared to hybrids'],
    image: placeholderImages.find(img => img.id === 'kienyeji-1')
  },
  {
    name: 'Kuroiler',
    description: 'A dual-purpose hybrid from India, developed to thrive in rural conditions. It is larger than the local Kienyeji and has a higher production rate.',
    features: ['Higher egg production (around 150-200 eggs/year)', 'Faster growth and heavier weight', 'Good foragers, can survive on agricultural waste', 'More susceptible to diseases than Kienyeji'],
    image: placeholderImages.find(img => img.id === 'kuroiler-1')
  },
  {
    name: 'Kenbro',
    description: 'A dual-purpose breed developed in Kenya by Kenchic Ltd. It is well-suited for local conditions and has improved production traits.',
    features: ['Faster maturity than Kienyeji', 'Good for both meat and eggs', 'Robust and adaptable to different climates in Kenya', 'Requires slightly more intensive management'],
    image: placeholderImages.find(img => img.id === 'kenbro-1')
  }
];

export const diseases = [
  {
    name: 'Newcastle Disease',
    symptoms: ['Gasping, coughing', 'Drooping wings, paralysis', 'Twisted necks', 'Watery, greenish diarrhea'],
    prevention: ['Vaccination is key', 'Strict biosecurity measures', 'Quarantine new birds'],
    cure: 'There is no cure for Newcastle disease. Supportive care can be provided, but prevention through vaccination is the best strategy.'
  },
  {
    name: 'Gumboro Disease (Infectious Bursal Disease)',
    symptoms: ['Whitish or watery diarrhea', 'Ruffled feathers, depression', 'Pecking at their own vent', 'High mortality in young chicks (3-6 weeks)'],
    prevention: ['Vaccination of parent stock and chicks', 'All-in/all-out system', 'Good sanitation'],
    cure: 'No specific cure. Supportive treatment with vitamins and electrolytes in water can help reduce mortality.'
  },
  {
    name: 'Fowl Pox',
    symptoms: ['Dry form: Wart-like sores on unfeathered areas (comb, wattles, eyelids)', 'Wet form: Yellowish cankers in the mouth and windpipe, causing respiratory distress'],
    prevention: ['Vaccination, especially in high-risk areas', 'Mosquito control, as they spread the virus'],
    cure: 'No cure. The disease is self-limiting. Provide soft food and ensure access to water. Antibiotics can prevent secondary bacterial infections.'
  },
  {
    name: 'Coccidiosis',
    symptoms: ['Bloody or watery diarrhea', 'Hunched posture, ruffled feathers', 'Pale comb and wattles', 'Reduced growth and feed consumption'],
    prevention: ['Use of medicated starter feed (with coccidiostats)', 'Good litter management to keep it dry', 'Avoid overcrowding'],
    cure: 'Treat with anticoccidial drugs (e.g., Amprolium) in drinking water as prescribed by a vet.'
  }
];

export const layersGuide = {
  title: 'Guide to Rearing Layers',
  introduction: 'Raising layers for egg production can be a profitable venture. Success depends on proper breed selection, housing, nutrition, and health management.',
  sections: [
    {
      title: 'Housing',
      content: 'Provide a clean, dry, and well-ventilated coop with at least 2-3 sq. ft. per bird. Include nesting boxes (one for every 4-5 hens) in a dark, quiet area of the coop. Perches should be available for roosting at night.',
    },
    {
      title: 'Feeding and Watering',
      content: 'Layers require a balanced diet rich in calcium. Provide commercial layer mash, which contains about 16-18% protein. Supplement with calcium sources like oyster shells. Ensure clean, fresh water is always available.',
    },
    {
      title: 'Lighting',
      content: 'Hens need about 14-16 hours of light per day to maintain optimal egg production. Use artificial lighting to supplement natural daylight, especially during shorter days.',
    },
    {
      title: 'Egg Collection',
      content: 'Collect eggs at least twice a day to ensure they are clean and to prevent breakage or egg-eating habits. Store eggs in a cool place.',
    }
  ]
};

export const broilersGuide = {
  title: 'Guide to Rearing Broilers',
  introduction: 'Broilers are raised for meat production and have a rapid growth rate, typically ready for market in 6-8 weeks. Efficiency is key to broiler farming.',
  sections: [
    {
      title: 'Brooding',
      content: 'The first few weeks are critical. Provide a warm, draft-free brooder with a heat source. The temperature should be around 32-35°C for the first week and gradually reduced by 3°C each week.',
    },
    {
      title: 'Feeding',
      content: 'Broilers have specific nutritional needs at different stages. Use high-protein starter feed (22-24% protein) for the first 2-3 weeks, followed by a finisher feed (19-21% protein) until market weight.',
    },
    {
      title: 'Housing and Space',
      content: 'Provide adequate space (about 1 sq. ft. per bird) to prevent overcrowding, which can lead to stress and disease. Ensure deep, dry litter (like wood shavings) to keep the coop clean.',
    },
    {
      title: 'Health Management',
      content: 'Follow a strict biosecurity and vaccination program. Monitor birds daily for any signs of illness. Quick response to health issues is crucial for minimizing losses.',
    }
  ]
};
