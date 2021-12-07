export interface CommunicationProfileModel {
    id: string;
    category: string;
    description: string;
}

export interface CommApiReadQuery extends Partial<CommunicationProfileModel> {
}
export interface CommApiWrite extends CommunicationProfileModel {
    
}