export interface Trainer {
    id: number;
    name: string; 
    surname: string;
    email: string;
}

export interface TrainerData {
    type: string;
    payload: string;
}