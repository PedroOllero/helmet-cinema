export interface Credentials{
    id: string;
    name: string;
    email: string;
    password: string;
}

export const EmptyCredentials: Credentials = {
    id: "",
    name: "",
    email: "",
    password: ""
}