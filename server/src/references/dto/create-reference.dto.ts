export class CreateReferenceDto {
    constructor(
        public referenceId: string,
        public name: string,
        public company: string,
        public phone: string,
        public email: string,
        public position: string

    ){}
}
