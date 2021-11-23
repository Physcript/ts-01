

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody, CardHeader } from 'reactstrap';

import CenterPiece from '../components/CenterPiece';
import { Loading } from '../components/LoadingComponent';
import UserContext from '../context/user';

export interface ILoginPageProps {}
const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const [ authenticating,setAuthenticating ] = useState<boolean>(false)
    const [ error, setError ] = useState<string>('')
    const userContext = useContext(UserContext)
    const Navigate = useNavigate()
    const isLogin = window.location.pathname.includes('login')

    const loginHandler = () => {
        setAuthenticating(true)
    }

    return (

        <div style = {{

            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
            WebkitTransform: 'translate(-50%,-50%)'

        }}>
            { !authenticating ? (
                <div style = {{
                    display:'flex',
                    width: '250px',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <input />
                    <input />
                    <div>
                        <button onClick = { loginHandler } >Login</button>
                    </div>
                </div>
            ) : (
                <div style = {{
                    display:'flex',
                    width: '250px',
                    flexDirection: 'column',
                    gap: '5px'
                }}>
                    <Loading />
                </div>
            )}
         </div>


    )

}

export default LoginPage
