import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

interface SocialLink {
  platform: 'linkedin' | 'instagram' | 'facebook' | 'x' | 'youtube' | 'producthunt';
  url: string;
}

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: SocialLink[];
}

const SocialIcon = ({ platform }: { platform: SocialLink['platform'] }) => {
  const iconClass = "w-4 h-4";
  
  switch (platform) {
    case 'linkedin':
      return <Linkedin className={iconClass} />;
    case 'instagram':
      return <Instagram className={iconClass} />;
    case 'facebook':
      return <Facebook className={iconClass} />;
    case 'youtube':
      return <Youtube className={iconClass} />;
    case 'x':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'producthunt':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.337 12.18h-2.763V8.424h2.763c1.04 0 1.878.84 1.878 1.878s-.84 1.878-1.878 1.878zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.337 15.042h-2.763v3.815H7.899V5.562h5.438c2.68 0 4.74 2.058 4.74 4.74s-2.06 4.74-4.74 4.74z" />
        </svg>
      );
    default:
      return null;
  }
};

export function TeamMemberCard({ name, role, image, socialLinks }: TeamMemberCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative w-48 h-48 mb-4 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-heading-sm font-semibold text-foreground mb-1">{name}</h3>
      <p className="text-body-sm text-muted-foreground mb-3">{role}</p>
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-colors"
            aria-label={link.platform}
          >
            <SocialIcon platform={link.platform} />
          </a>
        ))}
      </div>
    </div>
  );
}
