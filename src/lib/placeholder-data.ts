import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export const placeholderImages: ImagePlaceholder[] = PlaceHolderImages;

export const breeds = [
  {
    name: 'Kienyeji',
    slug: 'kienyeji',
    description: 'A popular indigenous breed in Kenya, known for its resilience and adaptability to local conditions. They are dual-purpose, good for both meat and eggs.',
    overview: 'The Kienyeji is specifically adapted for the Kenyan climate. It is a dual-purpose breed, meaning it is excellent for both meat and egg production. These birds are highly resistant to common poultry diseases and require less expensive feed compared to exotic breeds, making them ideal for small-scale farmers.',
    features: ['Hardy and disease-resistant', 'Free-range foragers', 'Flavorful meat and yellow-yolk eggs', 'Slower growth rate compared to hybrids'],
    stats: [
      { key: 'Yield', value: '120-150', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '5-6', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '1.5-2.0', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Free Range System', 'Arid Areas', 'Disease Resistant'],
    feedingHabits: 'Efficient scavengers. Best raised under a semi-free range system to reduce feed costs. Supplement with greens and kitchen waste.',
    economicValue: 'High market demand for yellow-yolk eggs and leaner, tastier meat compared to broilers. Fetch premium prices in local markets.',
    images: [
        placeholderImages.find(img => img.id === 'kienyeji-1'),
        placeholderImages.find(img => img.id === 'kienyeji-2'),
    ].filter((img): img is ImagePlaceholder => !!img)
  },
  {
    name: 'Kuroiler',
    slug: 'kuroiler',
    description: 'A dual-purpose hybrid from India, developed to thrive in rural conditions. It is larger than the local Kienyeji and has a higher production rate.',
    overview: 'The Kuroiler is a dual-purpose hybrid from India, developed to thrive in rural conditions. It is larger than the local Kienyeji and has a higher production rate, making it a popular choice for farmers looking for improved yields in both meat and eggs.',
    features: ['Higher egg production (around 150-200 eggs/year)', 'Faster growth and heavier weight', 'Good foragers, can survive on agricultural waste', 'More susceptible to diseases than Kienyeji'],
    stats: [
      { key: 'Yield', value: '150-200', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '4-5', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '2.5-3.5', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Semi-intensive', 'Good for beginners'],
    feedingHabits: 'Good foragers, but require more supplementary feed than Kienyeji to reach full potential. Benefit from commercial feeds.',
    economicValue: 'Excellent for both meat and egg sales due to faster growth and higher lay rate. Can be sold at a premium over indigenous birds.',
    images: [
        placeholderImages.find(img => img.id === 'kuroiler-1'),
        placeholderImages.find(img => img.id === 'kuroiler-2'),
    ].filter((img): img is ImagePlaceholder => !!img)
  },
  {
    name: 'Kenbro',
    slug: 'kenbro',
    description: 'A dual-purpose breed developed in Kenya by Kenchic Ltd. It is well-suited for local conditions and has improved production traits.',
    overview: 'The Kenbro is a dual-purpose breed developed in Kenya by Kenchic Ltd. It is well-suited for local conditions and has improved production traits, offering a balance between the hardiness of local birds and the productivity of hybrids.',
    features: ['Faster maturity than Kienyeji', 'Good for both meat and eggs', 'Robust and adaptable to different climates in Kenya', 'Requires slightly more intensive management'],
    stats: [
      { key: 'Yield', value: '200-220', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '4-5', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '3.0-4.0', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Free Range System', 'Semi-intensive', 'Adaptable Climate'],
    feedingHabits: 'Perform well on commercial feeds but can also forage. A balanced diet is crucial for achieving high production rates.',
    economicValue: 'High demand due to its large size and good egg-laying capabilities. Popular in both urban and rural markets.',
    images: [
        placeholderImages.find(img => img.id === 'kenbro-1'),
        placeholderImages.find(img => img.id === 'kenbro-2'),
    ].filter((img): img is ImagePlaceholder => !!img)
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
