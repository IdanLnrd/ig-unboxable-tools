export interface NLPLabelingSession {
    insights: { [insight]: string[] };
    keywords?: string[];
    title?: string;
    description?: string;
    text: string;
}