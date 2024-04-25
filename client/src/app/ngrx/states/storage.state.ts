import { Storage } from '../../models/storage.model';



export interface StorageState{
    isCreateAtProfileLoading: boolean;
    isCreateAtProfileSuccess: boolean;
    createAtProfileError: string;

    isGetByFolderNameAtProfileLoading: boolean;
    isGetByFolderNameAtProfileSuccess: boolean;
    getByFolderNameAtProfileError: string;
    fileTakenByFolderNameAtProfile: Storage;

    isCreateAtJobDetailsLoading: boolean;
    isCreateAtJobDetailsSuccess: boolean;
    createAtJobDetailsError: string;

    isGetByFolderNameAtJobDetailLoading: boolean;
    isGetByFolderNameAtJobDetailSuccess: boolean;
    getByFolderNameAtJobDetailError: string;
    fileTakenByFolderNameAtJobDetail: Storage;

    
}