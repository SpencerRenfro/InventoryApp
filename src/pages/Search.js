import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import ItemList from '../components/ItemList';

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');

  // Use _like for partial and case-insensitive matching
  const url = `http://localhost:8000/inventory?name_like=${query}&description_like=${query}&category_like=${query}&status_like=${query}`;

  const { data, error, isPending } = useFetch(url);

  return (
    <div>
      <h1>Inventory Items Including "{query}"</h1>
      {error && <div className='error'>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <ItemList items={data} />}
    </div>
  );
}

export default Search;
