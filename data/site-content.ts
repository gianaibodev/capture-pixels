export interface HeroContent {
  mediaType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string; // for video
  bgImageSrc: string;
  title: string;
  subtitle: string;
  locations: string[];
  phone: string;
  email: string;
  ctaText: string;
  ctaLink: string;
}

export interface Service {
  title: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  avatarUrl: string;
}

export interface ClientImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
}

export interface SiteContent {
  hero: HeroContent;
  services: Service[];
  testimonials: Testimonial[];
  clients: ClientImage[];
  projects: Project[];
  carouselImages: string[]; // Array of image URLs for 3D carousel
}

// Helper to generate client images
const generateClientImages = (): ClientImage[] => {
  const baseImages = [
    {
      src: "https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
      alt: "Mountain Landscape",
      title: "Mountain Landscape",
      description: "A beautiful landscape captured at golden hour."
    },
    {
      src: "https://images.unsplash.com/photo-1757647016230-d6b42abc6cc9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2072",
      alt: "Portrait Photography",
      title: "Portrait Photography",
      description: "Stunning portrait photography."
    },
    {
      src: "https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
      alt: "Urban Architecture",
      title: "Urban Architecture",
      description: "Modern architectural design."
    },
     {
      src: "https://images.unsplash.com/photo-1742201877377-03d18a323c18?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1064",
      alt: "Nature Scene",
      title: "Nature Scene",
      description: "Peaceful nature scene."
    },
    {
      src: "https://images.unsplash.com/photo-1757081791153-3f48cd8c67ac?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
      alt: "Abstract Art",
      title: "Abstract Art",
      description: "Creative abstract composition."
    },
    {
      src: "https://images.unsplash.com/photo-1534083220759-4c3c00112ea0?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
      alt: "Abstract Art",
      title: "Abstract Art",
      description: "Creative abstract composition."
    }
  ];

  const images: ClientImage[] = [];
  for (let i = 0; i < 50; i++) {
    const base = baseImages[i % baseImages.length];
    images.push({
      id: `img-${i + 1}`,
      src: base.src,
      alt: base.alt,
      title: base.title,
      description: base.description
    });
  }
  return images;
};

export const siteContent: SiteContent = {
  hero: {
    mediaType: 'video',
    mediaSrc: 'https://me7aitdbxq.ufs.sh/f/2wsMIGDMQRdYuZ5R8ahEEZ4aQK56LizRdfBSqeDMsmUIrJN1', 
    posterSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    bgImageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop',
    title: 'Capture Pixels',
    subtitle: 'Memories that lasts a lifetime',
    locations: [
      'Himamaylan',
      'Hinigaran',
      'La Castellana',
      'Bacolod City',
      'Bago City',
      'Kabankalan',
      'Binalbagan'
    ],
    phone: '+63 927 145 0062',
    email: 'Thecapturepixels@gmail.com',
    ctaText: 'View Services',
    ctaLink: '/services'
  },
  services: [
    {
      title: 'Photography',
      description: 'Professional photography for weddings, events, and portraits. We capture the essence of every moment with artistic precision.',
      iconName: 'Camera'
    },
    {
      title: 'Videography',
      description: 'Cinematic video coverage for your special moments. Telling your story through motion and sound with 4K quality.',
      iconName: 'Video'
    }
  ],
  testimonials: [
    {
      id: '1',
      name: 'Jenevie Jocson - Gemarino',
      quote: 'Captures every moment with very great quality and affordable price. Kadasig pa maghatag sang copies🤙🏻Highly recommended gd.✨🩵',
      avatarUrl: 'https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-1/564622992_24930469489925531_3971039239427313453_n.jpg?stp=cp0_dst-jpg_s80x80_tt6&_nc_cat=106&ccb=1-7&_nc_sid=1d2534&_nc_ohc=T20XvwbaJE4Q7kNvwFtCbZL&_nc_oc=Adkt1sscV1sL8GakoIgXXfFko2rE811F1voIKYiH8q28xh4m5mRr_KKCCaTSoe2OsOY&_nc_zt=24&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=MpZuRdgdq9OtEWuaKw1N-g&oh=00_AfjtBpviRwvgfwpjjnkv1T7AQ5N_1_gr5bRur0skR_MfSw&oe=6925DE0C'
    },
    {
      id: '2',
      name: 'Golez Alice',
      quote: 'good taking pictures 😊😊😊😊 highly recommended.💯',
      avatarUrl: 'https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-1/578292085_2549427008752521_3477254433885948341_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=1d2534&_nc_ohc=QSvq-5uww0AQ7kNvwG2fy6s&_nc_oc=Adl605NTD8f5PJw64mSaGGEfZ-2xShC_dWjsvj4xYThDgT2xBBeC5MTAAcdDiIYVnm4&_nc_zt=24&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=Fk65HRAqdxK1LpuefXuhBw&oh=00_Afjv-ppXJ-HXB4OFzn2AhUHAWjzFdPDTsmJceeFUD5rbvg&oe=6925E7F1'
    },
    {
      id: '3',
      name: 'Mary Reynante',
      quote: 'excellent! great pictures, exceptional angles and budget friendly from a fantastic photographer, it\'s so magnificent.',
      avatarUrl: 'https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-1/563046494_1549043999875247_661709182156929988_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=IqGNGkNMr2EQ7kNvwEQuNeI&_nc_oc=AdkIOWNbyNuXL-Cnho4yxHKZrIBSMW6dgL76g0D1Us4q0_JHfbSdAnq-pgODfWuthZ8&_nc_zt=24&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=WGWbcMCtk3bQj-dLDL3k7g&oh=00_AfiVsno3oYatGnSHsMBe4wH4dnXQqP93CHUM1XUani9m8Q&oe=6925C6F4'
    },
    {
      id: '4',
      name: 'ChuckLyn Alianza',
      quote: 'Good captured photos, very accommodating and very affordable',
      avatarUrl: 'https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-1/513938216_1434370251244748_1703103718594310960_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=e99d92&_nc_ohc=3kUrtyNWCP8Q7kNvwG0NnCY&_nc_oc=Adnm0IJP9vbVL26FB9RIIxIW7i-gkF0Pkoas1-6Hpe3PNTwgfzhomj6yZO7Q6nxkyew&_nc_zt=24&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=oJIBXIgs-vmk4lViXuModA&oh=00_AfitvTl-_bkK7fuJ2HAJcVIMiVV8C3jTA87gwXaZeAQs-g&oe=6925E3E9'
    },
    {
      id: '5',
      name: 'Siomaism Ricesm',
      quote: 'nice photography, good service, affordable price',
      avatarUrl: 'https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/487214995_2413335462378790_2511895063246087417_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VX5ejkCZ-jwQ7kNvwE2h1Ku&_nc_oc=AdkP4xBHbejbDCY9VaMfP-IS-GugLghgf1f71ZH-N8Xld5x6v2Pk93baRgv-AqMZ33U&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=8l8YiMFO1MQKnLCFO2GSpw&oh=00_AfhyGEsPds6IvR1kAFsUP1_AlyEtHf_XKiHZwJBrJpHNKQ&oe=6925C82F'
    }
  ],
  clients: generateClientImages(),
  projects: [
    {
       id: '1',
       title: 'Beach Wedding',
       description: 'Sunset wedding ceremony at Boracay. Capturing the golden hour moments with 4K drone footage and candid emotional shots.',
       imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
       date: 'Dec 2023',
       tags: ['Wedding', 'Photography']
    },
    {
       id: '2',
       title: '18th Birthday Debut',
       description: 'Magical debut celebration theme. A night of elegance, music, and memories captured in cinematic style.',
       imageUrl: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1920&auto=format&fit=crop',
       date: 'Nov 2023',
       tags: ['Debut', 'Videography']
    },
    {
       id: '3',
       title: 'Corporate Event',
       description: 'Annual gala dinner for a leading tech company. Professional coverage of speakers, awards, and networking.',
       imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
       date: 'Oct 2023',
       tags: ['Event', 'Corporate']
    }
  ],
  carouselImages: [
    'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1920&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1758178309498-036c3d7d73b3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987',
    'https://images.unsplash.com/photo-1757647016230-d6b42abc6cc9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2072',
    'https://images.unsplash.com/photo-1757906447358-f2b2cb23d5d8?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987',
    'https://images.unsplash.com/photo-1742201877377-03d18a323c18?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1064',
    'https://images.unsplash.com/photo-1757081791153-3f48cd8c67ac?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987',
  ]
};
