

import { createContext } from 'react';

import IUser, { DEFAULT_TOKEN, DEFAULT_USER } from '../interfaces/user';

export interface IUserState {
    user: IUser,
    token: string
}
export interface IUserAction {
    type: 'login' | 'logout' | 'authenticate'
    payload: IUserState
}

export const initialUserState = {
    user: DEFAULT_USER,
    token: DEFAULT_TOKEN
}

export const userReducer = (state: IUserState,action: IUserAction) => {
    let user = action.payload.user
    let token = action.payload.token

    switch (action.type) {
        case 'login':
            localStorage.setItem('token', token)
            return { user,token }
        case 'logout':
            localStorage.removeItem('token')
            return initialUserState
        default:
            return state
    }

}

export interface IUserContextProps {
    userState: IUserState,
    userDispatch: React.Dispatch<IUserAction>
}


const UserContext = createContext<IUserContextProps>({
    userState: initialUserState,
    userDispatch: () => {}
})

export const UserContextConsumer = UserContext.Consumer
export const UserContextProvider = UserContext.Provider
export default UserContext
