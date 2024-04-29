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



    
)