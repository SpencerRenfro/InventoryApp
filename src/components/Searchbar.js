import React, { useState } from 'react';

export default function Searchbar() {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex">
        <div style={{ position: 'relative', width: '100%' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="-5.0 -10.0 110.0 135.0"
            style={{
              position: 'absolute',
              left: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              width: '40px',
              height: '40px',
            }}
          >
            <path
              d="m77 77.75-17.5-17.5c3.25-3.75 5.5-8.75 5.5-14 0-11.75-9.5-21.25-21.25-21.25s-21.25 9.5-21.25 21.25 9.5 21.25 21.25 21.25c5.5 0 10.25-2 14-5.5l17.5 17.5zm-33.5-12.75c-10.25 0-18.75-8.5-18.75-18.75s8.5-18.75 18.75-18.75 18.75 8.5 18.75 18.75-8.5 18.75-18.75 18.75z"
              stroke="black"
              strokeWidth="4"
              fill="none"
            />
          </svg>
          <input
            className="w-full rounded text-xl border py-4"
            type="text"
            id="search"
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search"
            style={{
              paddingLeft: '45px', // Adjust padding to make room for the image
            }}
          />
        </div>
      </form>
    </div>
  );
}
