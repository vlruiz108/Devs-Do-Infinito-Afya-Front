import React, { useEffect, useState } from 'react';

import { apiChuck } from '../../../service/api';

interface IJoke {
  id: string;
  icon_url: string;
  value: string;
}

const Teste: React.FC = () => {
  const [categoriesJoke, setCategoriesJoke] = useState([]);
  const [categorySelected, setCategorySelected] = useState<IJoke>()
  const [searchJoke, setSearchJoke] = useState('')
  const [isLoad, setIsLoad] = useState(false)
  const [resultSearch, setResultSearch] = useState<IJoke[]>([])


  useEffect(() => {
    apiChuck.get('jokes/categories').then(
      response => {
        setCategoriesJoke(response.data)
      }
    )
  }, [])

  async function handleJokes() {
    setIsLoad(true)
    const response = await apiChuck.get(`jokes/search?query=${searchJoke}`)
    setResultSearch(response.data.result)
    if (response.status === 200) {
      setIsLoad(false)
    }
  }

  async function handleJokeByCategory(e: string) {
    setIsLoad(true)
    const response = await apiChuck.get(`jokes/random?category=${e}`)
    setCategorySelected(response.data)
    if (response.status === 200) {
      setIsLoad(false)
    }
  }


  return (
    <>
      <div>
        <ul>
          {categoriesJoke.map((joke, index) => (
            <li key={index} onClick={() => handleJokeByCategory(joke)}>{joke}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={categorySelected?.icon_url} alt={categorySelected?.value} />
        <h3>{categorySelected?.value}</h3>
      </div>

      <h2>Find Joke</h2>

      <div className="input-group">
        <input type="text" onChange={e => setSearchJoke(e.target.value)} />
        <button type="submit" onClick={handleJokes}> Find joke</button>
      </div>
      <p>Find results for:</p>
      <div className="joker">
        {isLoad ? <img src='' alt="load" /> : resultSearch.map(result => (
          <div key={result.id}>
            <img src={result.icon_url} alt={result.value} />
            <h3>{result.value}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default Teste;