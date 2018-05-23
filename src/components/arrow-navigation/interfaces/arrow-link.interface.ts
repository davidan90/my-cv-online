export type arrowDirection = 'left' | 'right' | 'up' | 'down';

export interface ArrowLink {
    title?: string;
    direction: arrowDirection;
    href: string;
}
