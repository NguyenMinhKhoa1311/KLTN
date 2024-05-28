export class CreateTokenResetPasswordDto {
    constructor(
        public  TokenId: string,
        public User: string,
        public Token: string,
        public Expires: Date
    ){}
}
