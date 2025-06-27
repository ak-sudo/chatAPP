import { Children, useState } from 'react'
import './App.css'
import Form from './modules/form'
import Dashboard from './modules/dashboard'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {

  const ProtectedRoute = ({children, auth=false}) => {
    const isLoggedIn = localStorage.getItem('user:token') !== null || false ;

    if (!isLoggedIn && auth) {
      return <Navigate to='/users/sign_in' />
    }
    else if (isLoggedIn && ['/users/sign_in', '/users/sign_up'].includes(window.location.pathname)) {
      return <Navigate to='/' />
    }

    return children

  }

  return (
    <Routes>
      <Route path='/' element={
        <ProtectedRoute auth={true}>
          <Dashboard/>
        </ProtectedRoute> 
      }/>
      <Route path='/users/sign_in' element={
        <ProtectedRoute>
          <Form isSignIn={true}/>
        </ProtectedRoute>
      } />
      <Route path='/users/sign_up' element={
        <ProtectedRoute>
          <Form isSignIn={false} />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App
