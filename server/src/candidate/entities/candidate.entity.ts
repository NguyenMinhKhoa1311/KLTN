import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type candidateDocument = HydratedDocument<Candidate>;


@Schema({timestamps: true})
export class Candidate {
    @Prop({required: true, unique: true})
    CandidateId: string;

    @Prop({required: true})
    Name: string;

    @Prop({required: true})
    Email: string;

    @Prop({required: true})
    Phone: string;


    @Prop({required: true})
    Address: string;

    @Prop({required: true})
    Position: string;

    @Prop({required: true})
    Experience: number;

    @Prop({
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Education',
    })
    Education:[mongoose.Schema.Types.ObjectId];

    @Prop({
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'WorkExperience',
    })
    WorkExperience: [mongoose.Schema.Types.ObjectId];

    @Prop({
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'CandidateSkill',
    })
    Skills: [mongoose.Schema.Types.ObjectId];

    @Prop({
        required: true,
    })
    Languages: string[];

    @Prop({
        required: true,
    })
    Avatar: string;

    @Prop({
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Storage',
    })
    Storage: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DesiredJob',
    })
    DesiredJob: string;

    @Prop({
        
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Field',
        required: true
    })
    Field: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Career',
        required: true
    })
    Career: string;

    @Prop({
        required: true,
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Job'
    })
    FavoriteJobs: [mongoose.Schema.Types.ObjectId];

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    })
    User: string;
    
    @Prop({required: true})
    DateOfBirth: Date;


}
export const CandidateSchema = SchemaFactory.createForClass(Candidate);
