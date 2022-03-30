import React from 'react'
import NavBar from '../navBar/index.js'

export default function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      {children}
    </>
  )
}
