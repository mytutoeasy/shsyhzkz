// Central data file for all portfolio content

export interface Photo {
  id: string
  title: string
  category: string
  resolution: string
  price: number
  downloads: number
  tags: string[]
  featured?: boolean
  src: string
  width: number
  height: number
}

export interface Category {
  id: string
  name: string
  count: number
  cover: string
  description: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  avatar: string
  quote: string
  rating: number
}

export interface Stat {
  label: string
  value: string
  suffix?: string
}

// ─── Photos ────────────────────────────────────────────────────────────────
export const photos: Photo[] = [
  {
    id: '1',
    title: 'Golden Hour Summit',
    category: 'Nature',
    resolution: '6000 × 4000',
    price: 29,
    downloads: 1842,
    tags: ['mountain', 'sunset', 'landscape'],
    featured: true,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
    width: 800,
    height: 600,
  },
  {
    id: '2',
    title: 'Urban Pulse',
    category: 'Architecture',
    resolution: '5472 × 3648',
    price: 39,
    downloads: 2310,
    tags: ['city', 'buildings', 'night'],
    featured: true,
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=1067&fit=crop',
    width: 800,
    height: 1067,
  },
  {
    id: '3',
    title: 'Ocean Whisper',
    category: 'Nature',
    resolution: '7360 × 4912',
    price: 25,
    downloads: 3204,
    tags: ['ocean', 'waves', 'blue'],
    featured: true,
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '4',
    title: 'Focused Vision',
    category: 'People',
    resolution: '5760 × 3840',
    price: 35,
    downloads: 987,
    tags: ['portrait', 'business', 'professional'],
    featured: true,
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop',
    width: 800,
    height: 1000,
  },
  {
    id: '5',
    title: 'Forest Solitude',
    category: 'Nature',
    resolution: '6000 × 4000',
    price: 22,
    downloads: 1560,
    tags: ['forest', 'mist', 'trees'],
    src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '6',
    title: 'Creative Workspace',
    category: 'Business',
    resolution: '5472 × 3648',
    price: 28,
    downloads: 4210,
    tags: ['office', 'desk', 'minimal'],
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '7',
    title: 'Desert Mirage',
    category: 'Nature',
    resolution: '7952 × 5304',
    price: 32,
    downloads: 776,
    tags: ['desert', 'dunes', 'sand'],
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '8',
    title: 'Cafe Moments',
    category: 'Lifestyle',
    resolution: '5760 × 3840',
    price: 19,
    downloads: 5321,
    tags: ['coffee', 'cafe', 'lifestyle'],
    src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '9',
    title: 'Glass Towers',
    category: 'Architecture',
    resolution: '5472 × 3648',
    price: 42,
    downloads: 1103,
    tags: ['skyscraper', 'glass', 'modern'],
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop',
    width: 800,
    height: 600,
  },
  {
    id: '10',
    title: 'Team Synergy',
    category: 'Business',
    resolution: '6000 × 4000',
    price: 33,
    downloads: 2890,
    tags: ['team', 'collaboration', 'work'],
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '11',
    title: 'Northern Lights',
    category: 'Nature',
    resolution: '7360 × 4912',
    price: 55,
    downloads: 892,
    tags: ['aurora', 'night', 'sky'],
    src: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
  {
    id: '12',
    title: 'Lush Valleys',
    category: 'Nature',
    resolution: '5760 × 3840',
    price: 27,
    downloads: 2147,
    tags: ['valley', 'green', 'pastoral'],
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=534&fit=crop',
    width: 800,
    height: 534,
  },
]

// ─── Categories ────────────────────────────────────────────────────────────
export const categories: Category[] = [
  {
    id: 'nature',
    name: 'Nature',
    count: 3840,
    cover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    description: 'Mountains, oceans, forests & beyond',
  },
  {
    id: 'architecture',
    name: 'Architecture',
    count: 2210,
    cover: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
    description: 'Cities, structures & spatial design',
  },
  {
    id: 'people',
    name: 'People',
    count: 5120,
    cover: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop',
    description: 'Portraits, diversity & human stories',
  },
  {
    id: 'business',
    name: 'Business',
    count: 4380,
    cover: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
    description: 'Office, tech & entrepreneurship',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    count: 6720,
    cover: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
    description: 'Food, travel, wellness & culture',
  },
  {
    id: 'abstract',
    name: 'Abstract',
    count: 1890,
    cover: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop',
    description: 'Textures, patterns & creative vision',
  },
]

// ─── Testimonials ───────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    company: 'Horizon Agency',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6dc2e4c?w=80&h=80&fit=crop&face',
    quote:
      'LensVault has transformed how we source imagery. The quality is consistently exceptional and the licensing is refreshingly straightforward.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James Okafor',
    role: 'Brand Strategist',
    company: 'Pulse Creative',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&face',
    quote:
      "We switched from three different stock sites to LensVault exclusively. The curation is unmatched — we find what we need in minutes, not hours.",
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Vasquez',
    role: 'Marketing Lead',
    company: 'Neon Labs',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&face',
    quote:
      "The resolution on these photos is incredible. We've printed billboards using LensVault images and they look absolutely stunning.",
    rating: 5,
  },
]

// ─── Stats ──────────────────────────────────────────────────────────────────
export const stats: Stat[] = [
  { label: 'Premium Photos', value: '2.4', suffix: 'M+' },
  { label: 'Professional Photographers', value: '18', suffix: 'K+' },
  { label: 'Happy Customers', value: '340', suffix: 'K+' },
  { label: 'Countries Served', value: '190', suffix: '+' },
]
