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
    fileTakenByFolderNameAtProfile: <Storage>{},

    isCreateAtJobDetailsLoading: false,
    isCreateAtJobDetailsSuccess: false,
    createAtJobDetailsError: '',

    isGetByFolderNameAtJobDetailLoading: false,
    isGetByFolderNameAtJobDetailSuccess: false,
    getByFolderNameAtJobDetailError: '',
    fileTakenByFolderNameAtJobDetail: <Storage>{}
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
    })),



    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(StorageAction.createAtJobDetails, (state,action) => ({
        ...state,
        isCreateAtJobDetailsLoading: true,
        isCreateAtJobDetailsSuccess: false,
        createAtJobDetailsError: ''
    })),
    on(StorageAction.createAtJobDetailsSuccess, (state,action) => ({
        ...state,
        isCreateAtJobDetailsLoading: false,
        isCreateAtJobDetailsSuccess: true,
        createAtJobDetailsError: ''
    })),
    on(StorageAction.createAtJobDetailsFailure, (state,action) => ({
        ...state,
        isCreateAtJobDetailsLoading: false,
        isCreateAtJobDetailsSuccess: false,
        createAtJobDetailsError: action.error
    })),




    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(StorageAction.getByFolderNameAtJobDetail, (state,action) => ({
        ...state,
        isGetByFolderNameAtJobDetailLoading: true,
        isGetByFolderNameAtJobDetailSuccess: false,
        getByFolderNameAtJobDetailError: ''
    })),
    on(StorageAction.getByFolderNameAtJobDetailSuccess, (state,action) => ({
        ...state,
        isGetByFolderNameAtJobDetailLoading: false,
        isGetByFolderNameAtJobDetailSuccess: true,
        getByFolderNameAtJobDetailError: '',
        fileTakenByFolderNameAtJobDetail: action.files
    })),
    on(StorageAction.getByFolderNameAtJobDetailFailure, (state,action) => ({
        ...state,
        isGetByFolderNameAtJobDetailLoading: false,
        isGetByFolderNameAtJobDetailSuccess: false,
        getByFolderNameAtJobDetailError: action.error,
    })),
)
