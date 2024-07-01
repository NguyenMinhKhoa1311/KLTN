import { createReducer, on } from "@ngrx/store";
import { UserState } from "../states/user.state";
import * as UserActions from "../actions/user.actions";
import { User } from "../../models/user.model";

export const initialState: UserState ={
    
    isCreateWithGoogleAtLoginLoading: false,
    isCreateWithGoogleAtLoginSuccess: false,
    cerateWithGoogleAtLoginError: '',

    isGetByUsernameWithGoogleAtLoginLoading: false,
    isGetByUsernameWithGoogleAtLoginSuccess: false,
    getByUsernameWithGoogleAtLoginError: '',
    userTakenByUsernameWithGoogleAtLogin: <User>{},

    isCreateWithGoogleAtRegisterLoading: false,
    isCreateWithGoogleAtRegisterSuccess: false,
    createWithGoogleAtRegisterError: '',

    isGetByUsernameWithGoogleAtRegisterLoading: false,
    isGetByUsernameWithGoogleAtRegisterSuccess: false,
    getByUsernameWithGoogleAtRegisterError: '',
    userTakenByUsernameWithGoogleAtRegister: <User>{},

    isGetByUsernameAtCreateProfileLoading: false,
    isGetByUsernameAtCreateProfileSuccess: false,
    getByUsernameAtCreateProfileError: '',
    userTakenByUsernameAtCreateProfile: <User>{},

    isGetUserByUsernameAndPasswordAtLoginLoading: false,
    isGetUserByUsernameAndPasswordAtLoginSuccess: false,
    getUserByUsernameAndPasswordAtLoginError: '',
    userTakenByUsernameAndPasswordAtLogin: <User>{},

    isGetByUsernameWithAccountAtRegisterLoading: false,
    isGetByUsernameWithAccountAtRegisterSuccess: false,
    getByUsernameWithAccountAtRegisterError: '',
    userTakenByUsernameWithAccountAtRegister: <User>{},

    isGetByUsernameOfRecruiterAtLoginLoading: false,
    isGetByUsernameOfRecruiterAtLoginSuccess: false,
    getByUsernameOfRecruiterAtLoginError: '',
    userTakenByUsernameOfRecruiterAtLogin: <User>{},

    isCreateUserOfRecruiterAtLoginSuccess: false,
    isCreateUserOfRecruiterAtLoginLoading: false,
    createUserOfRecruiterAtLoginError: '',
    usercreatedOfRecruiterAtLogin: <User>{},

    isGetByUsernameAndPasswordOfRecruiterAtLoginSuccess: false,
    isGetByUsernameAndPasswordOfRecruiterAtLoginLoading: false,
    getByUsernameAndPasswordOfRecruiterAtLoginError: '',
    userTakenByUsernameAndPasswordOfRecruiterAtLogin: <User>{},

    isGetByUsernameOfRecruiterAtRegisterLoading: false,
    isGetByUsernameOfRecruiterAtRegisterSuccess: false,
    getByUsernameOfRecruiterAtRegisterError: '',
    userTakenByUsernameOfRecruiterAtRegister: <User>{},

    isCreateUserOfRecruiterAtRegisterSuccess: false,
    isCreateUserOfRecruiterAtRegisterLoading: false,
    createUserOfRecruiterAtRegisterError: '',
    usercreatedOfRecruiterAtRegister: <User>{},

    isGetByUsernameOfRecruiterWithAccountAtRegisterLoading: false,
    isGetByUsernameOfRecruiterWithAccountAtRegisterSuccess: false,
    getByUsernameOfRecruiterWithAccountAtRegisterError: '',
    userTakenByUsernameOfRecruiterWithAccountAtRegister: <User>{},

    changePassOfCandidateError: '',
    isChangePassOfCandidateLoading: false,
    isChangePassOfCandidateSuccess: false,
    userChangedPassOfCandidate: <User>{},

    changePassOfRecruiterError: '',
    isChangePassOfRecruiterLoading: false,
    isChangePassOfRecruiterSuccess: false,
    userChangedPassOfRecruiter: <User>{},

    changePassOfAdminWithoutTokenError: '',
    isChangePassOfAdminWithoutTokenLoading: false,
    isChangePassOfAdminWithoutTokenSuccess: false,
    userChangedPassOfAdminWithoutToken: <User>{},

    changePassOfCandidateWithoutTokenError: '',
    isChangePassOfCandidateWithoutTokenLoading: false,
    isChangePassOfCandidateWithoutTokenSuccess: false,
    userChangedPassOfCandidateWithoutToken: <User>{},

    changePassOfRecruiterWithoutTokenError: '',
    isChangePassOfRecruiterWithoutTokenLoading: false,
    isChangePassOfRecruiterWithoutTokenSuccess: false,
    userChangedPassOfRecruiterWithoutToken: <User>{},

    isGetByUsernameAtUserManagementOfAdminLoading: false,
    isGetByUsernameAtUserManagementOfAdminSuccess: false,
    getByUsernameAtUserManagementOfAdminError: '',
    userTakenByUsernameAtUserManagementOfAdmin: <User>{},

    isGetByUsernameAtUserManagementOfCandidateLoading: false,
    isGetByUsernameAtUserManagementOfCandidateSuccess: false,
    getByUsernameAtUserManagementOfCandidateError: '',
    userTakenByUsernameAtUserManagementOfCandidate: <User>{},

    isGetByUsernameAtUserManagementOfRecruiterLoading: false,
    isGetByUsernameAtUserManagementOfRecruiterSuccess: false,
    getByUsernameAtUserManagementOfRecruiterError: '',
    userTakenByUsernameAtUserManagementOfRecruiter: <User>{},

    createUserOfAdminAtRegisterError: '',
    isCreateUserOfAdminAtRegisterLoading: false,
    isCreateUserOfAdminAtRegisterSuccess: false,
    userCreatedOfAdminAtRegister: <User>{},

    getByGmailOfAdminAtRegisterError: '',
    isGetByGmailOfAdminAtRegisterLoading: false,
    isGetByGmailOfAdminAtRegisterSuccess: false,
    userTakenByGmailOfAdminAtRegister: <User>{},

    getByGmailOfAdminWithAccountAtRegisterError: '',
    isGetByGmailOfAdminWithAccountAtRegisterLoading: false,
    isGetByGmailOfAdminWithAccountAtRegisterSuccess: false,
    userTakenByGmailOfAdminWithAccountAtRegister: <User>{},

    isGetByUsernameOfAdminAtLoginLoading: false,
    isGetByUsernameOfAdminAtLoginSuccess: false,
    getByUsernameOfAdminAtLoginError: '',
    userTakenByUsernameOfAdminAtLogin: <User>{},

    isCreateUserOfAdminAtLoginLoading: false,
    isCreateUserOfAdminAtLoginSuccess: false,
    createUserOfAdminAtLoginError: '',
    userCreatedOfAdminAtLogin: <User>{},

    getByUsernameandPasswordOfAdminAtLoginError: '',
    isGetByUsernameandPasswordOfAdminAtLoginLoading: false,
    isGetByUsernameandPasswordOfAdminAtLoginSuccess: false,
    userTakenByUsernameandPasswordOfAdminAtLogin: <User>{},


};

export const userReducer = createReducer(
    initialState,
    on(UserActions.createWithGoogleAtLogin, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtLoginLoading: true,
            isCreateWithGoogleAtLoginSuccess: false,
            cerateWithGoogleAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtLoginSuccess, (state, action) => {
        console.log(action.type);
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtLoginLoading: false,
            isCreateWithGoogleAtLoginSuccess: true,
            cerateWithGoogleAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtLoginFailure, (state, action) => {
        console.log(action.type, action.errorMessage);
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtLoginLoading: false,
            isCreateWithGoogleAtLoginSuccess: false,
            cerateWithGoogleAtLoginError: action.errorMessage,
        };
        return newState;
    }),





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByGmailWithGoogleAtLogin, (state, action) => {
        console.log(action.Username);
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtLoginLoading: true,
            isGetByUsernameWithGoogleAtLoginSuccess: false,
            getByUsernameWithGoogleAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtLoginSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtLoginLoading: false,
            isGetByUsernameWithGoogleAtLoginSuccess: true,
            getByUsernameWithGoogleAtLoginError: '',
            userTakenByUsernameWithGoogleAtLogin: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtLoginFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtLoginLoading: false,
            isGetByUsernameWithGoogleAtLoginSuccess: false,
            getByUsernameWithGoogleAtLoginError: action.errorMessage,
        };
        return newState;
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.createWithGoogoleAtRegister, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtRegisterLoading: true,
            isCreateWithGoogleAtRegisterSuccess: false,
            createWithGoogleAtRegisterError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtRegisterSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtRegisterLoading: false,
            isCreateWithGoogleAtRegisterSuccess: true,
            createWithGoogleAtRegisterError: '',
        };
        return newState;
    }),
    on(UserActions.createWithGoogleAtRegisterFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateWithGoogleAtRegisterLoading: false,
            isCreateWithGoogleAtRegisterSuccess: false,
            createWithGoogleAtRegisterError: action.errorMessage,
        };
        return newState;
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByGmailWithGoogleAtRegisterSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtRegisterLoading: false,
            isGetByUsernameWithGoogleAtRegisterSuccess: true,
            getByUsernameWithGoogleAtRegisterError: '',
            userTakenByUsernameWithGoogleAtRegister: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtRegisterFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtRegisterLoading: false,
            isGetByUsernameWithGoogleAtRegisterSuccess: false,
            getByUsernameWithGoogleAtRegisterError: action.errorMessage,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithGoogleAtRegister, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithGoogleAtRegisterLoading: true,
            isGetByUsernameWithGoogleAtRegisterSuccess: false,
            getByUsernameWithGoogleAtRegisterError: '',
        };
        return newState;
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByGmailAtCreateProfile, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtCreateProfileLoading: true,
            isGetByUsernameAtCreateProfileSuccess: false,
            getByUsernameAtCreateProfileError: '',
        };
        return newState;
    }),
    on(UserActions.getUserByGmailAtCreateProfileSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtCreateProfileLoading: false,
            isGetByUsernameAtCreateProfileSuccess: true,
            getByUsernameAtCreateProfileError: '',
            userTakenByUsernameAtCreateProfile: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailAtCreateProfileFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtCreateProfileLoading: false,
            isGetByUsernameAtCreateProfileSuccess: false,
            getByUsernameAtCreateProfileError: action.errorMessage,
        };
        return newState;
    }),



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByUsernameAndPasswordAtLogin, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetUserByUsernameAndPasswordAtLoginLoading: true,
            isGetUserByUsernameAndPasswordAtLoginSuccess: false,
            getUserByUsernameAndPasswordAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.getUserByUsernameAndPasswordAtLoginSuccess, (state, action) => {
        console.log(action.type);
        let newState: UserState = {
            ...state,
            isGetUserByUsernameAndPasswordAtLoginLoading: false,
            isGetUserByUsernameAndPasswordAtLoginSuccess: true,
            getUserByUsernameAndPasswordAtLoginError: '',
            userTakenByUsernameAndPasswordAtLogin: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByUsernameAndPasswordAtLoginFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetUserByUsernameAndPasswordAtLoginLoading: false,
            isGetUserByUsernameAndPasswordAtLoginSuccess: false,
            getUserByUsernameAndPasswordAtLoginError: action.errorMessage,
        };
        return newState;
    }),


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByGmailWithAccountAtRegister, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithAccountAtRegisterLoading: true,
            isGetByUsernameWithAccountAtRegisterSuccess: false,
            getByUsernameWithAccountAtRegisterError: '',
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithAccountAtRegisterSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithAccountAtRegisterLoading: false,
            isGetByUsernameWithAccountAtRegisterSuccess: true,
            getByUsernameWithAccountAtRegisterError: '',
            userTakenByUsernameWithAccountAtRegister: action.user,
        };
        return newState;
    }),
    on(UserActions.getUserByGmailWithAccountAtRegisterFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameWithAccountAtRegisterLoading: false,
            isGetByUsernameWithAccountAtRegisterSuccess: false,
            getByUsernameWithAccountAtRegisterError: action.errorMessage,
        };
        return newState;
    }),




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.resetState, (state) => {
        console.log('reset state');
        return initialState;
    }),







    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByGmailOfRecruiterAtLogin, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterAtLoginLoading: true,
            isGetByUsernameOfRecruiterAtLoginSuccess: false,
            getByUsernameOfRecruiterAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.getByGmailOfRecruiterAtLoginSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterAtLoginLoading: false,
            isGetByUsernameOfRecruiterAtLoginSuccess: true,
            getByUsernameOfRecruiterAtLoginError: '',
            userTakenByUsernameOfRecruiterAtLogin: action.user,
        };
        return newState;
    }),
    on(UserActions.getByGmailOfRecruiterAtLoginFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterAtLoginLoading: false,
            isGetByUsernameOfRecruiterAtLoginSuccess: false,
            getByUsernameOfRecruiterAtLoginError: action.errorMessage,
        };
        return newState;
    }),





    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.createUserOfRecruiterAtLogin, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateUserOfRecruiterAtLoginLoading: true,
            isCreateUserOfRecruiterAtLoginSuccess: false,
            createUserOfRecruiterAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.createUserOfRecruiterAtLoginSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isCreateUserOfRecruiterAtLoginLoading: false,
            isCreateUserOfRecruiterAtLoginSuccess: true,
            createUserOfRecruiterAtLoginError: '',
            usercreatedOfRecruiterAtLogin: action.user,
        };
        return newState;
    }),
    on(UserActions.createUserOfRecruiterAtLoginFailure, (state, action) => {
        console.log(action.type);
        console.log(action.errorMessage);
        
        
        let newState: UserState = {
            ...state,
            isCreateUserOfRecruiterAtLoginLoading: false,
            isCreateUserOfRecruiterAtLoginSuccess: false,
            createUserOfRecruiterAtLoginError: action.errorMessage,
        };
        return newState;
    }),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByUsernameAndPasswordOfRecruiterAtLogin, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAndPasswordOfRecruiterAtLoginLoading: true,
            isGetByUsernameAndPasswordOfRecruiterAtLoginSuccess: false,
            getByUsernameAndPasswordOfRecruiterAtLoginError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getByUsernameAndPasswordOfRecruiterAtLoginSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAndPasswordOfRecruiterAtLoginLoading: false,
            isGetByUsernameAndPasswordOfRecruiterAtLoginSuccess: true,
            getByUsernameAndPasswordOfRecruiterAtLoginError: '',
            userTakenByUsernameAndPasswordOfRecruiterAtLogin: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getByUsernameAndPasswordOfRecruiterAtLoginFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAndPasswordOfRecruiterAtLoginLoading: false,
            isGetByUsernameAndPasswordOfRecruiterAtLoginSuccess: false,
            getByUsernameAndPasswordOfRecruiterAtLoginError: action.errorMessage,
        };
        return newState;
    }
    ),


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByGmailOfRecruiterAtRegister, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterAtRegisterLoading: true,
            isGetByUsernameOfRecruiterAtRegisterSuccess: false,
            getByUsernameOfRecruiterAtRegisterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfRecruiterAtRegisterSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterAtRegisterLoading: false,
            isGetByUsernameOfRecruiterAtRegisterSuccess: true,
            getByUsernameOfRecruiterAtRegisterError: '',
            userTakenByUsernameOfRecruiterAtRegister: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfRecruiterAtRegisterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterAtRegisterLoading: false,
            isGetByUsernameOfRecruiterAtRegisterSuccess: false,
            getByUsernameOfRecruiterAtRegisterError: action.errorMessage,
        };
        return newState;
    }
    ),





    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.createUserOfRecruiterAtRegister, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfRecruiterAtRegisterLoading: true,
            isCreateUserOfRecruiterAtRegisterSuccess: false,
            createUserOfRecruiterAtRegisterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.createUserOfRecruiterAtRegisterSuccess, (state, action) => {

        
        let newState: UserState = {
            ...state,
            isCreateUserOfRecruiterAtRegisterLoading: false,
            isCreateUserOfRecruiterAtRegisterSuccess: true,
            createUserOfRecruiterAtRegisterError: '',
            usercreatedOfRecruiterAtRegister: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.createUserOfRecruiterAtRegisterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfRecruiterAtRegisterLoading: false,
            isCreateUserOfRecruiterAtRegisterSuccess: false,
            createUserOfRecruiterAtRegisterError: action.errorMessage,
        };
        return newState;
    }
    ),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByGmailOfRecruiterWithAccountAtRegister, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterWithAccountAtRegisterLoading: true,
            isGetByUsernameOfRecruiterWithAccountAtRegisterSuccess: false,
            getByUsernameOfRecruiterWithAccountAtRegisterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfRecruiterWithAccountAtRegisterSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterWithAccountAtRegisterLoading: false,
            isGetByUsernameOfRecruiterWithAccountAtRegisterSuccess: true,
            getByUsernameOfRecruiterWithAccountAtRegisterError: '',
            userTakenByUsernameOfRecruiterWithAccountAtRegister: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfRecruiterWithAccountAtRegisterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfRecruiterWithAccountAtRegisterLoading: false,
            isGetByUsernameOfRecruiterWithAccountAtRegisterSuccess: false,
            getByUsernameOfRecruiterWithAccountAtRegisterError: action.errorMessage,
        };
        return newState;
    }
    ),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.changePassOfCandidate, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfCandidateLoading: true,
            isChangePassOfCandidateSuccess: false,
            changePassOfCandidateError: '',
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfCandidateSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfCandidateLoading: false,
            isChangePassOfCandidateSuccess: true,
            changePassOfCandidateError: '',
            userChangedPassOfCandidate: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfCandidateFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfCandidateLoading: false,
            isChangePassOfCandidateSuccess: false,
            changePassOfCandidateError: action.errorMessage,
        };
        return newState;
    }
    ),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.changePassOfRecruiter, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfRecruiterLoading: true,
            isChangePassOfRecruiterSuccess: false,
            changePassOfRecruiterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfRecruiterSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfRecruiterLoading: false,
            isChangePassOfRecruiterSuccess: true,
            changePassOfRecruiterError: '',
            userChangedPassOfRecruiter: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfRecruiterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfRecruiterLoading: false,
            isChangePassOfRecruiterSuccess: false,
            changePassOfRecruiterError: action.errorMessage,
        };
        return newState;
    }
    ),
    



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.changePassOfAdminWithoutToken, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfAdminWithoutTokenLoading: true,
            isChangePassOfAdminWithoutTokenSuccess: false,
            changePassOfAdminWithoutTokenError: '',
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfAdminWithoutTokenSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfAdminWithoutTokenLoading: false,
            isChangePassOfAdminWithoutTokenSuccess: true,
            changePassOfAdminWithoutTokenError: '',
            userChangedPassOfAdminWithoutToken: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfAdminWithoutTokenFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfAdminWithoutTokenLoading: false,
            isChangePassOfAdminWithoutTokenSuccess: false,
            changePassOfAdminWithoutTokenError: action.errorMessage,
        };
        return newState;
    }
    ),



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.changePassOfCandidateWithoutToken, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfCandidateWithoutTokenLoading: true,
            isChangePassOfCandidateWithoutTokenSuccess: false,
            changePassOfCandidateWithoutTokenError: '',
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfCandidateWithoutTokenSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfCandidateWithoutTokenLoading: false,
            isChangePassOfCandidateWithoutTokenSuccess: true,
            changePassOfCandidateWithoutTokenError: '',
            userChangedPassOfCandidateWithoutToken: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfCandidateWithoutTokenFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfCandidateWithoutTokenLoading: false,
            isChangePassOfCandidateWithoutTokenSuccess: false,
            changePassOfCandidateWithoutTokenError: action.errorMessage,
        };
        return newState;
    }
    ),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.changePassOfRecruiterWithoutToken, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfRecruiterWithoutTokenLoading: true,
            isChangePassOfRecruiterWithoutTokenSuccess: false,
            changePassOfRecruiterWithoutTokenError: '',
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfRecruiterWithoutTokenSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfRecruiterWithoutTokenLoading: false,
            isChangePassOfRecruiterWithoutTokenSuccess: true,
            changePassOfRecruiterWithoutTokenError: '',
            userChangedPassOfRecruiterWithoutToken: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.changePassOfRecruiterWithoutTokenFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isChangePassOfRecruiterWithoutTokenLoading: false,
            isChangePassOfRecruiterWithoutTokenSuccess: false,
            changePassOfRecruiterWithoutTokenError: action.errorMessage,
        };
        return newState;
    }
    ),
    



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByUsernameAtUserManagementOfAdmin, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfAdminLoading: true,
            isGetByUsernameAtUserManagementOfAdminSuccess: false,
            getByUsernameAtUserManagementOfAdminError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getUserByUsernameAtUserManagementOfAdminSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfAdminLoading: false,
            isGetByUsernameAtUserManagementOfAdminSuccess: true,
            getByUsernameAtUserManagementOfAdminError: '',
            userTakenByUsernameAtUserManagementOfAdmin: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getUserByUsernameAtUserManagementOfAdminFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfAdminLoading: false,
            isGetByUsernameAtUserManagementOfAdminSuccess: false,
            getByUsernameAtUserManagementOfAdminError: action.errorMessage,
        };
        return newState;
    }
    ),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByUsernameAtUserManagementOfCandidate, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfCandidateLoading: true,
            isGetByUsernameAtUserManagementOfCandidateSuccess: false,
            getByUsernameAtUserManagementOfCandidateError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getUserByUsernameAtUserManagementOfCandidateSuccess, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfCandidateLoading: false,
            isGetByUsernameAtUserManagementOfCandidateSuccess: true,
            getByUsernameAtUserManagementOfCandidateError: '',
            userTakenByUsernameAtUserManagementOfCandidate: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getUserByUsernameAtUserManagementOfCandidateFailure, (state, action) => {
        console.log(action.type);
        
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfCandidateLoading: false,
            isGetByUsernameAtUserManagementOfCandidateSuccess: false,
            getByUsernameAtUserManagementOfCandidateError: action.errorMessage,
        };
        return newState;
    }
    ),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getUserByUsernameAtUserManagementOfRecruiter, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfRecruiterLoading: true,
            isGetByUsernameAtUserManagementOfRecruiterSuccess: false,
            getByUsernameAtUserManagementOfRecruiterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getUserByUsernameAtUserManagementOfRecruiterSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfRecruiterLoading: false,
            isGetByUsernameAtUserManagementOfRecruiterSuccess: true,
            getByUsernameAtUserManagementOfRecruiterError: '',
            userTakenByUsernameAtUserManagementOfRecruiter: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getUserByUsernameAtUserManagementOfRecruiterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameAtUserManagementOfRecruiterLoading: false,
            isGetByUsernameAtUserManagementOfRecruiterSuccess: false,
            getByUsernameAtUserManagementOfRecruiterError: action.errorMessage,
        };
        return newState;
    }
    ),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.createAtRegisterOfAdmin, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfAdminAtRegisterLoading: true,
            isCreateUserOfAdminAtRegisterSuccess: false,
            createUserOfAdminAtRegisterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.createAtRegisterOfAdminSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfAdminAtRegisterLoading: false,
            isCreateUserOfAdminAtRegisterSuccess: true,
            createUserOfAdminAtRegisterError: '',
            userCreatedOfAdminAtRegister: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.createAtRegisterOfAdminFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfAdminAtRegisterLoading: false,
            isCreateUserOfAdminAtRegisterSuccess: false,
            createUserOfAdminAtRegisterError: action.errorMessage,
        };
        return newState;
    }
    ),




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByGmailOfAdminAtRegister, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByGmailOfAdminAtRegisterLoading: true,
            isGetByGmailOfAdminAtRegisterSuccess: false,
            getByGmailOfAdminAtRegisterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfAdminAtRegisterSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByGmailOfAdminAtRegisterLoading: false,
            isGetByGmailOfAdminAtRegisterSuccess: true,
            getByGmailOfAdminAtRegisterError: '',
            userTakenByGmailOfAdminAtRegister: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfAdminAtRegisterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByGmailOfAdminAtRegisterLoading: false,
            isGetByGmailOfAdminAtRegisterSuccess: false,
            getByGmailOfAdminAtRegisterError: action.errorMessage,
        };
        return newState;
    }
    ),







    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByGmailOfAdminWithAccountAtRegister, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByGmailOfAdminWithAccountAtRegisterLoading: true,
            isGetByGmailOfAdminWithAccountAtRegisterSuccess: false,
            getByGmailOfAdminWithAccountAtRegisterError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfAdminWithAccountAtRegisterSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByGmailOfAdminWithAccountAtRegisterLoading: false,
            isGetByGmailOfAdminWithAccountAtRegisterSuccess: true,
            getByGmailOfAdminWithAccountAtRegisterError: '',
            userTakenByGmailOfAdminWithAccountAtRegister: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getByGmailOfAdminWithAccountAtRegisterFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByGmailOfAdminWithAccountAtRegisterLoading: false,
            isGetByGmailOfAdminWithAccountAtRegisterSuccess: false,
            getByGmailOfAdminWithAccountAtRegisterError: action.errorMessage,
        };
        return newState;
    }
    ),


    



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByUsernameOfAdminAtLogin, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfAdminAtLoginLoading: true,
            isGetByUsernameOfAdminAtLoginSuccess: false,
            getByUsernameOfAdminAtLoginError: '',
        };
        return newState;
    }
    ),
    on(UserActions.getByUsernameOfAdminAtLoginSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfAdminAtLoginLoading: false,
            isGetByUsernameOfAdminAtLoginSuccess: true,
            getByUsernameOfAdminAtLoginError: '',
            userTakenByUsernameOfAdminAtLogin: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.getByUsernameOfAdminAtLoginFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameOfAdminAtLoginLoading: false,
            isGetByUsernameOfAdminAtLoginSuccess: false,
            getByUsernameOfAdminAtLoginError: action.errorMessage,
        };
        return newState;
    }
    ), 




    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.createAtLoginOfAdmin, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfAdminAtLoginLoading: true,
            isCreateUserOfAdminAtLoginSuccess: false,
            createUserOfAdminAtLoginError: '',
        };
        return newState;
    }
    ),
    on(UserActions.createAtLoginOfAdminSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfAdminAtLoginLoading: false,
            isCreateUserOfAdminAtLoginSuccess: true,
            createUserOfAdminAtLoginError: '',
            userCreatedOfAdminAtLogin: action.user,
        };
        return newState;
    }
    ),
    on(UserActions.createAtLoginOfAdminFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isCreateUserOfAdminAtLoginLoading: false,
            isCreateUserOfAdminAtLoginSuccess: false,
            createUserOfAdminAtLoginError: action.errorMessage,
        };
        return newState;
    }
    ),




    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    on(UserActions.getByUsernameAndPasswordOfAdminAtLogin, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameandPasswordOfAdminAtLoginLoading: true,
            isGetByUsernameandPasswordOfAdminAtLoginSuccess: false,
            getByUsernameandPasswordOfAdminAtLoginError: '',
        };
        return newState;
    }),
    on(UserActions.getByUsernameAndPasswordOfAdminAtLoginSuccess, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameandPasswordOfAdminAtLoginLoading: false,
            isGetByUsernameandPasswordOfAdminAtLoginSuccess: true,
            getByUsernameandPasswordOfAdminAtLoginError: '',
            userTakenByUsernameandPasswordOfAdminAtLogin: action.user,
        };
        return newState;
    }),
    on(UserActions.getByUsernameAndPasswordOfAdminAtLoginFailure, (state, action) => {
        let newState: UserState = {
            ...state,
            isGetByUsernameandPasswordOfAdminAtLoginLoading: false,
            isGetByUsernameandPasswordOfAdminAtLoginSuccess: false,
            getByUsernameandPasswordOfAdminAtLoginError: action.errorMessage,
        };
        return newState;
    }),







    
)