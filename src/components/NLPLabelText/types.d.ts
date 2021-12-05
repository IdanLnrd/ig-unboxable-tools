export interface INLPLabelingSession {
    id: string;
    insights: { [insight]: string[] };
    keywords?: string[];
    title?: string;
    description?: string;
    text: string;
}