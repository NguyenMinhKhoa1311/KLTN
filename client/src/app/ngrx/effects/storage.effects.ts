import { Injectable } from "@angular/core";
import * as StorageAction from '../actions/storage.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StorageService } from '../../services/storage/storage.service';
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";

@Injectable()
export class StorageEffects {
    constructor(
        private action$: Actions,
        private storageService: StorageService
      ) {}
      createAtProfile$ = createEffect(() =>
        this.action$.pipe(
            ofType(StorageAction.createAtProfile),
            switchMap((action) => {
              return this.storageService.create(
                action.file,
                action.fileName
              );
            }),
            map(() => {
              return StorageAction.createAtProfileSuccess();
            }),
            catchError((error) => {
              return of(StorageAction.createAtProfileFailure({ error: error }));
            })
          )
      );

        getByFolderNameAtProfile$ = createEffect(() =>
            this.action$.pipe(
            ofType(StorageAction.getByFolderNameAtProfile),
            switchMap((action) => {
                return this.storageService.getStorage(action.folderName);
            }),
            map((files) => {
                return StorageAction.getByFolderNameAtProfileSuccess({ files });
            }),
            catchError((error) => {
                return of(StorageAction.getByFolderNameAtProfileFailure({ error }));
            })
            )
        );

        createAtJobDetails$ = createEffect(() =>
            this.action$.pipe(
            ofType(StorageAction.createAtJobDetails),
            switchMap((action) => {
                return this.storageService.create(
                action.file,
                action.fileName
                );
            }),
            map(() => {
                return StorageAction.createAtJobDetailsSuccess();
            }),
            catchError((error) => {
                return of(StorageAction.createAtJobDetailsFailure({ error }));
            })
            )
        );

        getByFolderNameAtJobDetail$ = createEffect(() =>
            this.action$.pipe(
            ofType(StorageAction.getByFolderNameAtJobDetail),
            switchMap((action) => {
                return this.storageService.getStorage(action.folderName);
            }),
            map((files) => {
                return StorageAction.getByFolderNameAtJobDetailSuccess({ files });
            }),
            catchError((error) => {
                return of(StorageAction.getByFolderNameAtJobDetailFailure({ error }));
            })
            )
        );
}