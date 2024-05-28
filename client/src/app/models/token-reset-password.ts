export interface TokenResetPassword {
    _id: string,
    TokenId: string,
    User: string,
    Token: string,
    Expires: Date
}