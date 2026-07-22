import React from 'react'
import Header from './components/Header'
import useFetch from './utils/useFetch'

function App() {
  const d = useFetch()
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App