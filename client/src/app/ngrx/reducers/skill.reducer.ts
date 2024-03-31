import { createReducer, on } from "@ngrx/store";
import { SkillState } from "../states/skill.state";
import * as SkillActions from "../actions/skill.actions";

export const initialState: SkillState = {
    skillsTakenByGetAllAtCreateCandidate: [],
    isGetAllAtCreateCandidateLoading: false,
    isGetAllAtCreateCandidateSuccess: false,
    getAllAtCreateCandidateError: ''
}

export const skillReducer = createReducer(
    initialState,
    on(SkillActions.getAllAtCreateCandidate, (state,action)=>{
        return{
            ...state,
            isGetAllAtCreateCandidateLoading: true,
            isGetAllAtCreateCandidateSuccess: false,
            getAllAtCreateCandidateError: ''
        }
    }),
    on(SkillActions.getAllAtCreateCandidateSuccess, (state, action)=>{
        return{
            ...state,
            skillsTakenByGetAllAtCreateCandidate: action.skills,
            isGetAllAtCreateCandidateLoading: false,
            isGetAllAtCreateCandidateSuccess: true,
            getAllAtCreateCandidateError: ''
        }
    }),
    on(SkillActions.getAllAtCreateCandidateFailure, (state, action)=>{
        return{
            ...state,
            isGetAllAtCreateCandidateLoading: false,
            isGetAllAtCreateCandidateSuccess: false,
            getAllAtCreateCandidateError: action.error
        }
    })
)