export interface ListRes<T> {
    content: T,
}
export interface UserLogin {
    email: string,
    password: string
}

export interface ResultLogin {
    id: number,
    email: string,
    avatar: string,
    phoneNumber: string,
    name: string,
    accessToken?: string
}
//sign up 
export interface UserSignup {
    email: string,
    password: string,
    name: string,
    phoneNumber: string,
}
export interface MesSignup {
    message: string
}
