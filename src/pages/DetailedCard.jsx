import React from 'react'
import { useParams } from 'react-router'

const DetailedCard = () => {
    const { movieId } = useParams();
  return (
    <div>
          <p>details : { movieId}</p>
    </div>
  )
}

export default DetailedCard
