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
  },
  'joan-omionawele': {
    id: 'joan-omionawele',
    name: 'Joan Omionawele',
    slug: 'joan-omionawele',
    avatar: '/team/joan-omionawele.jpg',
    role: 'Co-founder & Communication President',
    bio: 'Joan is a financial expert and business communication specialist with extensive experience in helping SMEs optimize their financial workflows and build lasting client relationships.',
    credentials: [
      'Business Finance Expert',
      'Communication Strategy Specialist'
    ],
    expertise: [
      'Financial Management',
      'Business Communication',
      'Client Relations',
      'SME Operations',
      'Invoicing Best Practices',
      'Cash Flow Management'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/joan-omionawele',
      instagram: 'https://instagram.com/invoicemonk'
    }
  },
  'prince-ehima': {
    id: 'prince-ehima',
    name: 'Prince Ehima',
    slug: 'prince-ehima',
    avatar: '/authors/prince-ehima.jpg',
    role: 'Financial Expert & Business Advisor',
    bio: 'Prince is a seasoned financial expert specializing in tax compliance, accounting best practices, and financial strategy for small businesses and freelancers across multiple markets.',
    credentials: [
      'Certified Financial Advisor',
      'Tax Compliance Specialist'
    ],
    expertise: [
      'Tax Compliance',
      'Financial Planning',
      'Business Accounting',
      'Small Business Finance',
      'Regulatory Compliance',
      'Financial Strategy'
    ],
    socialLinks: {
      linkedin: 'https://linkedin.com/in/prince-ehima'
    }
  }
};

export const defaultAuthor = authors['olayinka-olayokun'];

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors[slug];
};

// Get all authors as array for listings
export const getAllAuthors = (): Author[] => {
  return Object.values(authors);
};

// Get financial expert authors for citations
export const getFinancialExperts = (): Author[] => {
  return Object.values(authors).filter(author => 
    author.expertise.some(exp => 
      exp.toLowerCase().includes('financial') || 
      exp.toLowerCase().includes('tax') ||
      exp.toLowerCase().includes('accounting')
    )
  );
};
