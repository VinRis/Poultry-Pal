
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
  },
  {
    name: 'Sasso',
    slug: 'sasso',
    description: 'A hardy, dual-purpose breed from France, known for its colored feathers and excellent meat quality, similar to indigenous chicken.',
    overview: 'Sasso chickens are a robust breed, well-adapted to free-range and semi-intensive farming systems in Africa. They have a slower growth rate than commercial broilers but produce high-quality, flavorful meat that is preferred in many local markets. They are also reasonable egg layers.',
    features: ['Excellent meat quality and taste', 'Hardy and disease-resistant', 'Good foragers, reducing feed costs', 'Available in various colors (red, grey, black)'],
    stats: [
      { key: 'Yield', value: '180-200', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '4-5', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '2.5-3.0', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Free Range System', 'Organic Farming', 'Disease Resistant'],
    feedingHabits: 'Adaptable foragers that thrive on a diet of local greens, insects, and grains. Supplementary feeding improves performance.',
    economicValue: 'Their meat fetches a premium price due to its superior taste. A good alternative to indigenous breeds with better growth rates.',
    images: [
        placeholderImages.find(img => img.id === 'sasso-1'),
        placeholderImages.find(img => img.id === 'sasso-2'),
    ].filter((img): img is ImagePlaceholder => !!img)
  },
  {
    name: 'KARI Improved Kienyeji',
    slug: 'kari-kienyeji',
    description: 'An improved indigenous breed developed by KARI, offering higher productivity while retaining the hardiness of local chicken.',
    overview: 'The KARI Improved Kienyeji is a result of selective breeding by the Kenya Agricultural and Livestock Research Organization. It matures faster, lays more eggs, and has a larger body than the original Kienyeji, while still being resistant to harsh conditions and common diseases.',
    features: ['Higher productivity than local kienyeji', 'Retains natural hardiness and disease resistance', 'Good for both eggs and meat', 'Excellent foragers'],
    stats: [
      { key: 'Yield', value: '220-280', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '5', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '2.0-2.5', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Free Range System', 'Semi-intensive', 'Arid Areas'],
    feedingHabits: 'Thrives in a free-range or semi-free-range system. They are efficient in converting feed to meat and eggs.',
    economicValue: 'Highly economical for small-scale farmers due to low maintenance costs and high production. Strong market demand.',
    images: [
        placeholderImages.find(img => img.id === 'kari-1'),
        placeholderImages.find(img => img.id === 'kari-2'),
    ].filter((img): img is ImagePlaceholder => !!img)
  },
  {
    name: 'Rainbow Rooster',
    slug: 'rainbow-rooster',
    description: 'A multi-colored, dual-purpose breed from India, known for its fast growth and high egg production, suitable for backyard farming.',
    overview: 'Rainbow Roosters are low-maintenance birds that look like indigenous chicken but have improved performance. They are bred to be hardy and can thrive on locally available feed, making them a cost-effective option for farmers.',
    features: ['Multi-colored plumage', 'Fast growth rate', 'High egg-laying capacity', 'Resistant to poultry diseases'],
    stats: [
      { key: 'Yield', value: '180-200', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '4.5-5', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '2.5-3.0', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Backyard Farming', 'Semi-intensive'],
    feedingHabits: 'Good scavengers, can be sustained on kitchen waste, green fodder, and locally sourced grains, reducing commercial feed dependency.',
    economicValue: 'Provides a steady income through both egg and meat sales. Its similarity in appearance and taste to local chicken gives it a market advantage.',
    images: [
        placeholderImages.find(img => img.id === 'rainbow-rooster-1'),
        placeholderImages.find(img => img.id === 'rainbow-rooster-2'),
    ].filter((img): img is ImagePlaceholder => !!img)
  },
  {
    name: 'Isa Brown',
    slug: 'isa-brown',
    description: 'A leading hybrid breed for egg production. They are renowned for their high laying capacity, producing large brown eggs.',
    overview: 'The Isa Brown is a hybrid type of chicken, not a true breed. It is a docile, reliable egg-layer, and one of the most popular choices for commercial and small-scale egg producers worldwide. They are not typically raised for meat due to their small frame.',
    features: ['Exceptional egg layer', 'Docile and friendly temperament', 'Efficient feed-to-egg conversion rate', 'Specifically bred for egg production'],
    stats: [
      { key: 'Yield', value: '300-350', unit: 'eggs/year', icon: 'Egg' },
      { key: 'Maturity', value: '4.5-5', unit: 'months', icon: 'Clock' },
      { key: 'Weight', value: '1.8-2.2', unit: 'kg', icon: 'Scale' }
    ],
    suitableEnvironments: ['Intensive System', 'Battery Cages', 'Controlled Environments'],
    feedingHabits: 'Requires a high-quality commercial layer feed to sustain its high production rate. Not suited for foraging-based systems.',
    economicValue: 'Extremely profitable for egg production businesses due to the high volume of eggs. They are the workhorses of the egg industry.',
    images: [
        placeholderImages.find(img => img.id === 'isa-brown-1'),
        placeholderImages.find(img => img.id === 'isa-brown-2'),
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
