import React from 'react'

function TotalAssetValue({totalAssetValue}) {
  return (
    <div className='flex items-center text-lg'>
        <p>Total Asset Value: ${totalAssetValue}</p>
    </div>
  )
}

export default TotalAssetValue