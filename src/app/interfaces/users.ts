// export interface Users {
//     Id_User?: number,
//     Username_User: string | undefined,
//     Password_User: string | undefined,
//     Email_User: string | undefined,
//     Status_User: string | undefined,   
// }

export interface UsersInterface {
    id?: string,
    username: string,
    password?: string,
    email: string,
    status: string,
    // IsActive: true
  
}

export interface apiResponseToken {
    msg: string
    payload: TokenPayload
}
  
export interface TokenPayload {
    token: string
}
  
export interface SessionType {
    name: string;
    // email: string;
    sub: number;
    status: string;
    iat: any

}