import { Career } from "./career.model";
import { CandidateSkill } from "./candidate-skill.model";
import { DesiredJob } from "./desired-job.model";
import { Education } from "./education.model";
import { Field } from "./field.model";
import { Job } from "./job.model";
import { User } from "./user.model";
import { WorkExperience } from "./work-experience.model";

export interface Candidate{
    _id: string;
     CandidateId: string,
     Name: string,
     Avatar: string,
     Gender: string,
     Storage: string,
     Phone: string,
     Address: string,
     Position: string,
     Experience: number,
     Education: Education[],
     WorkExperience: WorkExperience[],
     Skills: CandidateSkill[],
     Languages: string[],
     DesiredJob: DesiredJob,
     Field: Field,
     Career: Career,
     User: User,
     DateOfBirth: Date,
     FavoriteJobs: Job[],
    createAt: Date;
    updateAt: Date;
}

export function isCandidate(obj: any): obj is Candidate {
    // Kiểm tra các trường bắt buộc
    const requiredFields = [
      "_id",
      "CandidateId",
      "Name",
      "Avatar",
      "Gender",
      "Storage",
      "Phone",
      "Address",
      "Position",
      "Experience",
      "Education",
      "WorkExperience",
      "Skills",
      "Languages",
      "DesiredJob",
      "Field",
      "Career",
      "User",
      "DateOfBirth",
      "FavoriteJobs",
      "createAt",
      "updateAt",
    ];
  
    if (!requiredFields.every((field) => field in obj)) {
      return false;
    }
    return true;
  }