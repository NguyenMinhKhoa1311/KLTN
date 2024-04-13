import { Career } from "./career.model";
import { CandidateSkill } from "./candidate-skill.model";
import { DesiredJob } from "./desired-job.model";
import { Education } from "./education.model";
import { Field } from "./field.model";
import { Job } from "./job.model";
import { User } from "./user.model";
import { WorkExperience } from "./work-experience.model";
import { Reference } from "./reference.model";
import { Skill } from "./skill.model";

export interface Candidate{
    _id: string;
     CandidateId: string,
     Name: string,
     Avatar: string,
     Gender: string,
     Storage: string,
     Email: string,
     Phone: string,
     Address: string,
     Position: string,
     Experience: number,
     Education: Education[],
     WorkExperience: WorkExperience[],
     Skills: Skill[],
     Languages: string[],
     DesiredJob: DesiredJob,
     Field: Field,
     Career: Career,
     User: User,
     DateOfBirth: Date,
     FavoriteJobs: Job[],
     CareerGoal: string,
     References: Reference[],
    createAt: Date;
    updateAt: Date;
}

