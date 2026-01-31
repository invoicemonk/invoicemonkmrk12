export interface Author {
  id: string;
  name: string;
  slug: string;
  avatar: string;
  role: string;
  bio: string;
  credentials: string[];
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export const authors: Record<string, Author> = {
  'olayinka-olayokun': {
    id: 'olayinka-olayokun',
    name: 'Olayinka Olayokun',
    slug: 'olayinka-olayokun',
    avatar: '/authors/olayinka-olayokun.jpg',
    role: 'Digital Marketing, SEO Specialist, Content Creator & Product Professional',
    bio: 'Olayinka is a digital marketer, content creator, growth and SEO specialist with 10+ years helping businesses in Nigeria, the UK, the US, Australia, and Dubai achieve their goals online.',
    credentials: [
      'CIM Certified',
      'MBA in Digital Marketing and Business Transformation'
    ],
    expertise: [
      'Digital Marketing',
      'SEO Strategy',
      'Business Growth',
      'International Markets',
      'Entrepreneurship',
      'Product Strategy',
      'Content Creation'
    ],
    socialLinks: {
      linkedin: 'https://ng.linkedin.com/in/olayokunyinka',
      twitter: 'https://x.com/olayokunyinka',
      instagram: 'https://instagram.com/olayokunyinka',
      facebook: 'https://facebook.com/olayokunyinka',
      tiktok: 'https://www.tiktok.com/@olayokunyinka',
      youtube: 'https://www.youtube.com/@olayokunyinka'
    }
  }
};

export const defaultAuthor = authors['olayinka-olayokun'];

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors[slug];
};
