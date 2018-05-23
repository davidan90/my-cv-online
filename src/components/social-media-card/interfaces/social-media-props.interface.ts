export type socialLogo = 'twitter' | 'github';

export interface SocialMediaProps {
    logo: socialLogo;
    userName?: string;
    href?: string;
}
