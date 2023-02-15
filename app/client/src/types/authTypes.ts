export interface authState {
    name?: string;
    email: string;
    password: string;
}

export interface AuthData {
    type: string;
    payload: authState;
}