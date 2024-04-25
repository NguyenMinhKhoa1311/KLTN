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


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const createAtJobDetails = createAction(
    '[Storage] Create At Job Details',
    props<{ file: File; fileName: string}>()
);
export const createAtJobDetailsSuccess = createAction(
    '[Storage] Create At Job Details Success',
);
export const createAtJobDetailsFailure = createAction(
    '[Storage] Create At Job Details Failure',
    props<{ error: string }>()
);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const getByFolderNameAtJobDetail = createAction(
    '[Storage] Get By Folder Name At Job Detail',
    props<{ folderName: string }>()
);
export const getByFolderNameAtJobDetailSuccess = createAction(
    '[Storage] Get By Folder Name At Job Detail Success',
    props<{ files: Storage }>()
);
export const getByFolderNameAtJobDetailFailure = createAction(
    '[Storage] Get By Folder Name At Job Detail Failure',
    props<{ error: string }>()
);
