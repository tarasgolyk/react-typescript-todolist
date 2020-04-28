import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Info page</h1>
        <p>Lorem ipsum...</p>
        <button
            className='btn'
            onClick={() => history.push('/react-typescript-todolist')}
        >Back to todos</button>
    </>
  )
}