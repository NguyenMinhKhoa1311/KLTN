export class CreateFieldDto {
    constructor(
        public FieldId: string,
        public FieldName: string,
        public Quantity: number,
    ){}
}
