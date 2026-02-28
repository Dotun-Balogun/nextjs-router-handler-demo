import Link from 'next/link'
import React from 'react'

const ProductListing = () => {
  return (
    <div>
        <Link href={'/product/id'}>Product 1</Link>
        <Link href={'/product/id'}>Product 2</Link>
        <Link href={'/product/id'}>Product 3</Link>
        <Link href={'/product/id'}>Product 4</Link>
    </div>
  )
}

export default ProductListing