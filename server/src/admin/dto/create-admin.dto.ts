export class CreateAdminDto {
    constructor(
        public AdminId: string,
        public Name: string,
        public User: string,
        public StatusConfirm: string,
    ) {}
}
