import React, { useState, useEffect } from 'react';

export default function App() {
    const [resourceType, setResourceType] = useState('posts')

    useEffect(() => {
      console.log('render')
    }, [resourceType])


    return (
    <>
      <div>
          <button onClick={() => setResourceType('posts')}></button>
          <button onClick={() => setResourceType('users')}></button>
          <button onClick={() => setResourceType('comments')}></button>
      </div>
      <h1>{resourceType}</h1>
    </>     
  )
}