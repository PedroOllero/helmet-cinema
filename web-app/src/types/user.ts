export interface RegisterCredentials{
    id: string;
    name: string;
    email: string;
    password: string;
}

export const EmptyRegisterCredentials: RegisterCredentials = {
    id: "",
    name: "",
    email: "",
    password: ""
}

export interface LoginCredentials{
    email: string;
    password: string;
}
export const EmptyLoginCredentials: LoginCredentials = {
    email: "",
    password: ""
}