export class CreateRecruitmentDto {
    constructor(
        public RecruitmentId: string,
        public Job: string,
        public Candidate: string,
        public Recruiter: string,
        public Company: string,
        public StatusSeenOfRecruiter: boolean,
        public Status: boolean,
        public DateApply: Date,
        public Career: string,
        public Field: string,
        public DateInterview: Date,

    ){}
}
