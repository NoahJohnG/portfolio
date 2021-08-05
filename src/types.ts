export type ViewName = string;

export interface ProjectDescription {
    name: string;
    role: string;
    orgs: string[];
    summary: string;
    finished: boolean;
    start?: Date;
    end?: Date;
    keywords?: string[];
    team?: Record<string, string>;
    image?: string;
}