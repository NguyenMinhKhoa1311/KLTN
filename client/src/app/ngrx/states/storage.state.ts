import { Storage } from '../../models/storage.model';



export interface StorageState{
    isCreateAtProfileLoading: boolean;
    isCreateAtProfileSuccess: boolean;
    createAtProfileError: string;

    isGetByFolderNameAtProfileLoading: boolean;
    isGetByFolderNameAtProfileSuccess: boolean;
    getByFolderNameAtProfileError: string;
    fileTakenByFolderNameAtProfile: Storage;
}