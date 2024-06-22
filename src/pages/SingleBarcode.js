import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

function SingleBarcode() {
  const { barcode } = useParams();
  const url = `http://localhost:8000/inventory?barcode=${barcode}`;
  const { data: items, error, isPending } = useFetch(url);

  // Assuming the response is an array of items, and you need only the first item
  const item = items && items.length > 0 ? items[0] : null;

  return (
    <div>
      {error && <div className='error'>{error}</div>}
      {isPending && <div>Loading...</div>}
      {item ? (
        <article>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>{item.status}</p>
        </article>
      ) : (
        !isPending && <div>No item found for barcode {barcode}</div>
      )}
    </div>
  );
}

export default SingleBarcode;
