import './App.css';

import React, { useEffect, useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthRoute from './components/AuthRoute';
import LoadingComponent from './components/LoadingComponent';
import masterRoutes from './config/routes';
import {
	initialUserState,
	UserContextProvider,
	userReducer,
} from './context/user';

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [ userState,userDispatch ] = useReducer(userReducer,initialUserState)
  const [ loading, setLoading ] = useState<boolean>(true)

  useEffect(()=> {
    CheckLocalStorageCredentials()
  },[])

  const CheckLocalStorageCredentials = () => {
    const token = localStorage.getItem('token')
    if(token == null) {
      userDispatch({ type: 'logout', payload: initialUserState})
      setLoading(false)
    }else {
      setLoading(false)
    }
  }

  const userContextValue = {
    userState,
    userDispatch
  }

  if(loading) {
    return <LoadingComponent> Laoding </LoadingComponent>
  }

  return (
      <UserContextProvider value = { userContextValue }>
        <Routes>
          {masterRoutes.map((route,index) => {
            if(route.auth) {
              <Route
                key = {index}
                path = {route.path}
                element = {
                  <AuthRoute>
                    <route.component props = {route.props}/>
                  </AuthRoute>
                }
              />
            }
            return(
              <Route
                key = {index}
                path = {route.path}
                element = {<route.component props = {route.props}/>}
              />
            )
          })}
        </Routes>
      </UserContextProvider>
  )
}

export default App;
