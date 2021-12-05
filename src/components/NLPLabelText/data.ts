import { v4 as uuid } from 'uuid';
import { INLPLabelingSession } from "./types";

const STORE_KEY = "nlp_sessions";

export class NLPData {
    async save(session: INLPLabelingSession) {
        if(!session.id) {
            session.id = uuid();
        }
        const data = await this.getData();
        data[session.id] = session;
        const strData = JSON.stringify(data);
        localStorage.setItem(STORE_KEY, strData);
    }
    async load(id?: string): Promise<INLPLabelingSession> {
        const data = await this.getData();
        return (id && data[id]) || {};
    }

    async remove(id: string) {
        const data = await this.getData();
        if(id) {
            delete data[id];
            const strData = JSON.stringify(data);
            localStorage.setItem(STORE_KEY, strData);
        }
    }
    
    async getById(id: string) {
        const data = await this.getData();
        return data[id];
    }

    async getData() {
        try {
            const dataStr = localStorage.getItem(STORE_KEY);
            return JSON.parse(dataStr || '{}');
        } catch(e: any) {
            localStorage.clear();
            console.error(e.message);
        }
    }

    async list(): Promise<INLPLabelingSession[]> {
        const result: INLPLabelingSession[] = [];
        const data = await this.getData();
        for(const id in data) {
            if(id && data[id]) {
                result.push(data[id]);
            }
        }
        return result;
    }
}