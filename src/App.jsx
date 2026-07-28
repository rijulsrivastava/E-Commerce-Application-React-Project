import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { appStore } from './utils/appStore'

function App() {
  return (

    // Provider wrapper provides redux store to all children component
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet /> {/*to render all childern component*/}
      </div>
    </Provider>
  )
}

export default App