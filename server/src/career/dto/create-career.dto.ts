export class CreateCareerDto {
    constructor(
        public CareerId: string,
        public Field: string,
        public Name: string
    ){}
}
