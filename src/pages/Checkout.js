import React from 'react'

function Checkout() {
  return (
    <div>
        <form>
            <label>Enter your name:</label>
            <input type="text" name="name" />
            <button type="submit">Check Out</button>
        </form>
    </div>
  )
}

export default Checkout