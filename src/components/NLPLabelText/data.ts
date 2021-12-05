import { NLPLabelingSession } from "./types";

const STORE_KEY = "nlp_session";

export class NLPData {
    async save(session: NLPLabelingSession) {
        const data = JSON.stringify(session);
        localStorage.setItem(STORE_KEY, data);
    }
    async load() {
        const dataStr = localStorage.getItem(STORE_KEY);
        return JSON.parse(dataStr || '{}');
    }
}