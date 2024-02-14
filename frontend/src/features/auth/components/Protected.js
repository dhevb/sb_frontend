import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default function Protected({ children }) {

    const user = useSelector("")

  if (!user){
    return <Navigate to = "/login" replace={true}></Navigate>
  }
  return children;
}
