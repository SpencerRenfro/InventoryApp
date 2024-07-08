import React from 'react'

function CheckedOut() {
  return (
    <div className="flex">
    <p className="text-lg mr-5">Checked Out</p>
    <svg
      className="w-3  fill-red-400  mx-2 self-center"
      viewBox="0 0 6 6"
      aria-hidden="true"
    >
      <circle cx={3} cy={3} r={3} />
    </svg>
    <p className="self-center">{2}</p>
  </div>
  )
}

export default CheckedOut