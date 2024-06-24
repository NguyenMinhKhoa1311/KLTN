export class CreateAdminDto {
    constructor(
        public AdminId: string,
        public Name: string,
        public User: string,
        public Phone: string,
        public Address: string,
        public StatusConfirm: string,
    ) {}
}
