import { CommApiReadQuery, CommApiWrite, CommunicationProfileModel } from "./types";


export class Store<T extends { id: string }> {
    private readonly key = 'comms';
    private save(data: T){
        const str = JSON.stringify(data);
        localStorage.setItem(this.key, str);
    }

    private load(){
        const str = localStorage.getItem(this.key);
        return JSON.parse(str  || "{}");
    }
    
    setItem(data: T) {
        const all = this.load(); 
        const { id } = data;
        if(id) {
            all[id] = data;
            this.save(all);
        }
    }

    getItems(id?: string) {
        const all = this.load();
        if(!id) {
            return all; 
        }
        return all[id] ? [ all[id] ] : [];
    }

}

const store = new Store<CommunicationProfileModel>();

export class CommApi {
    async write(data: CommApiWrite) {
        store.setItem(data);
    }

    async read(query?: CommApiReadQuery) {
        return store.getItems(query?.id);
    }
}