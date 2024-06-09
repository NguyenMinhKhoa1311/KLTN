export class DeleteBanDto {
    constructor(
        public _id: string,
        public User: string,
        public ForCandidate:Boolean,
        public ForRecruiter:Boolean,
    ){}
}

