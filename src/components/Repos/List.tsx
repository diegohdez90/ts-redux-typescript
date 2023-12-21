import React from 'react'

interface Props {
  data: any[]
}

const List = ({
  data
}: Props) => {
  console.log('data', data);
  
  return (
    <div>
      <h2>List of repos</h2>
      <ul>
      {
        data.map(repo => (
          <li>{repo?.package?.name}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default List
