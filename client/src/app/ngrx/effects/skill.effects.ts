import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { SkillService } from "../../services/skill/skill.service";
import * as SkillActions from "../actions/skill.actions";
import { catchError, exhaustMap, map, of } from "rxjs";

@Injectable()
export class SkillEffects{
    constructor(
        private actions$: Actions,
        private skillService: SkillService
    ){}

    getAllAtCreateProfile$ = createEffect(() =>
    this.actions$.pipe(
        ofType(SkillActions.getAllAtCreateCandidate),
        exhaustMap(() =>
            this.skillService.getAll().pipe(
                map((skills) => SkillActions.getAllAtCreateCandidateSuccess({skills})),
                catchError((error) => of(SkillActions.getAllAtCreateCandidateFailure({error: error})))
            )
        )
    )
    );

}
