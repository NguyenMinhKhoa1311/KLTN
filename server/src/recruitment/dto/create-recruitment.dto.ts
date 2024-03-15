export class CreateRecruitmentDto {
    constructor(
        public RecruitmentId: string,
        public Job: string,
        public Candidate: string,
        public Recruiter: string,
        public Status: boolean,
        public DateApply: Date,
        public DateInterview: Date,

    ){}
}
