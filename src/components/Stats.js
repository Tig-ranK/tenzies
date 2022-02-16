import React from 'react'

export default function Stats(props) {
  return (
    <div className="stats">
      <p>Roll Count: {props.count}</p>
      <p>Current Time: </p>
      <p>Best Time: </p>
    </div>
  )
}