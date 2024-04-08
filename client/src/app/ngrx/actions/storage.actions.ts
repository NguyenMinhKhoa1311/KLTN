import { createAction, props } from '@ngrx/store';
import { Storage } from '../../models/storage.model';


export const createAtProfile = createAction(
    '[Storage] Create At Profile',
    props<{ file: File; fileName: string}>()
);
export const createAtProfileSuccess = createAction(
    '[Storage] Create At Profile Success',
);
export const createAtProfileFailure = createAction(
    '[Storage] Create At Profile Failure',
    props<{ error: string }>()
);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFolderNameAtProfile = createAction(
    '[Storage] Get By Folder Name At Profile',
    props<{ folderName: string }>()
);
export const getByFolderNameAtProfileSuccess = createAction(
    '[Storage] Get By Folder Name At Profile Success',
    props<{ files: Storage }>()
);
export const getByFolderNameAtProfileFailure = createAction(
    '[Storage] Get By Folder Name At Profile Failure',
    props<{ error: string }>()
);
export function create(create: any): import("rxjs").OperatorFunction<import("@ngrx/store").Action, any> {
    throw new Error("Function not implemented.");
}

