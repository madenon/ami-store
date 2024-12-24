import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryProduct = () => {
  const params = useParams()
  console.log("categoryName", params)
  return (
    <div className='mt-10'>

      {params?.categoryName}
    </div>
  )
}

export default CategoryProduct