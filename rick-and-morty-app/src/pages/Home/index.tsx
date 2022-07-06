import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import CharacterCard from '../../components/CharacterCard';
import Filter from '../../components/Filter';
import { LoadingSpinner } from '../../components/Icons';

import './styles.scss';

interface CharacterData {
  id: number,
  name: string,
  status: string,
  image: string,
}

type SearchData = {
  name?: string,
  status?: string,
  species?: string
}

export default function Home() {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = useLocation();
  const urlSearch = search ? `${search}&` : '?';

  function handleChangeSearchParams(params: SearchData) {
    setLoading(true);
    setSearchParams(params);
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character${urlSearch}LIMIT=20`);
      const responseJson = await response.json();

      setLoading(false);
      setCharacters(responseJson.results);
    })();
  }, [searchParams]);

  if (loading) {
    return (
      <main className="container">
        <Filter handleChangeSearchParams={handleChangeSearchParams} searchParams={searchParams} />
        <section className="characters-list">
          <LoadingSpinner />
        </section>
      </main>
    );
  }

  return (
    <main className="container">
      <Filter handleChangeSearchParams={handleChangeSearchParams} searchParams={searchParams} />
      <section className="characters-list">

        {
          characters
            ? (
              characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))
            )
            : (
              <h1>Not found characters</h1>
            )
        }
      </section>

    </main>

  );
}
