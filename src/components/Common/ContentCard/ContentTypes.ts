export interface ContentCardProps {
    title?: string;
    period: {
        start: string;
        end?: string;
    };
    subtitle?: string;
    status?: string;
    contents: ContentItem[];
}

export interface ContentItem {
    label?: {
        primary?: string;
        emphasis?: string;
        subtext: string;
    };
    description?: {
        strong?: string;
        icon?: string;
        text?: string;
        indent?: 'single' | 'double';
        href?: string;
    };
    skill?: string[];
    bullet?: boolean;
}