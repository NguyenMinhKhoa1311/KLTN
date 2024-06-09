export class CreateBanDto {
    constructor(
        public BanId: string,
        public Reason: string,
        public Date: Date,
        public Candidate: string,
        public Recruiter: string,
    ){}
}

