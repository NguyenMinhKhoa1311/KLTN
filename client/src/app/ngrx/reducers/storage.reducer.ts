import { createReducer, on } from '@ngrx/store';
import { StorageState } from '../states/storage.state';
import * as StorageAction from '../actions/storage.actions';
import { Storage } from '../../models/storage.model';

export const initualState: StorageState = {
    isCreateAtProfileLoading: false,
    isCreateAtProfileSuccess: false,
    createAtProfileError: '',

    isGetByFolderNameAtProfileLoading: false,
    isGetByFolderNameAtProfileSuccess: false,
    getByFolderNameAtProfileError: '',
    fileTakenByFolderNameAtProfile: <Storage>{}
};

export const storageReducer = createReducer(
    initualState,
    on(StorageAction.createAtProfile, (state,action) => ({
        ...state,
        isCreateAtProfileLoading: true,
        isCreateAtProfileSuccess: false,
        createAtProfileError: ''
    })),
    on(StorageAction.createAtProfileSuccess, (state,action) => ({
        ...state,
        isCreateAtProfileLoading: false,
        isCreateAtProfileSuccess: true,
        createAtProfileError: ''
    })),
    on(StorageAction.createAtProfileFailure, (state,action) => ({
        ...state,
        isCreateAtProfileLoading: false,
        isCreateAtProfileSuccess: false,
        createAtProfileError: action.error
    })),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(StorageAction.getByFolderNameAtProfile, (state,action) => ({
        ...state,
        isGetByFolderNameAtProfileLoading: true,
        isGetByFolderNameAtProfileSuccess: false,
        getByFolderNameAtProfileError: ''
    })),
    on(StorageAction.getByFolderNameAtProfileSuccess, (state,action) => ({
        ...state,
        isGetByFolderNameAtProfileLoading: false,
        isGetByFolderNameAtProfileSuccess: true,
        getByFolderNameAtProfileError: '',
        fileTakenByFolderNameAtProfile: action.files
    })),
    on(StorageAction.getByFolderNameAtProfileFailure, (state,action) => ({
        ...state,
        isGetByFolderNameAtProfileLoading: false,
        isGetByFolderNameAtProfileSuccess: false,
        getByFolderNameAtProfileError: action.error,
    }))
)
