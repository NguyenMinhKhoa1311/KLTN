export class CreateReferenceDto {
    constructor(
        public ReferenceId: string,
        public Name: string,
        public Company: string,
        public Phone: string,
        public Email: string,
        public Position: string

    ){}
}
