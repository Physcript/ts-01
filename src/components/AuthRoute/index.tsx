import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../context/user';

export interface IAuthRouteProps {}

const AuthRoute: React.FunctionComponent<IAuthRouteProps> = props => {
    const Navigate = useNavigate()
    const { user } = useContext(UserContext).userState
    if(user._id === ''){
        console.log('Not Authenticated')
        return <>{ Navigate('/login') }</>
    }
    else {
        return <>  </>
    }

}

export default AuthRoute
