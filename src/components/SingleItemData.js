import React from 'react'

//hooks
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

function SingleItemData() {

  const { id } = useParams()
  const url = `http://localhost:8000/inventory/${id}`
  const { data: item, error, isPending } = useFetch(url)
  return (
    <div>
      {error && <div className='error' /**this is a global css name */>{error}</div>}
      {isPending && <div>Loading...</div>}
      {item && (
        <article>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.status}</p>
        </article>
      )}
    </div>
  )
}

export default SingleItemData