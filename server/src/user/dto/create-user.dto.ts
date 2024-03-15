export class CreateUserDto {
    constructor(
        public Username: string,
        public Password: string,
        public Uid: string,
    ){}
}
