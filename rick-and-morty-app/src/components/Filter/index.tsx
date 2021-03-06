import { BaseSyntheticEvent, useState } from 'react';

import { EmptyIcon, SearchIcon } from '../Icons';

import { Container, ContainerItems, Form } from './styles';

type SearchData = {
  name?: string,
  status?: string,
  species?: string
}

type FilterProps = {
  handleChangeSearchParams: (args: SearchData) => void,
  searchParams: URLSearchParams,
}

type SearchDataURLParams = SearchData & URLSearchParams;

export default function Filter({ handleChangeSearchParams, searchParams }: FilterProps) {
  const [nameSearch, setNameSearch] = useState(searchParams.get('name') || '');
  const [statusSearch, setStatusSearch] = useState(searchParams.get('status') || '');
  const [specieSearch, setSpecieSearch] = useState(searchParams.get('species') || '');

  function handleChangeNameSearch(event: BaseSyntheticEvent) {
    setNameSearch(event.currentTarget.value);
  }

  function handleChangeStatusSearch(event: BaseSyntheticEvent) {
    setStatusSearch(event.currentTarget.value);
  }

  function handleChangeSpecieSearch(event: BaseSyntheticEvent) {
    setSpecieSearch(event.currentTarget.value);
  }

  function handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();

    const param = {} as SearchData;

    if (nameSearch) param.name = nameSearch as string;
    if (statusSearch) param.status = statusSearch as string;
    if (specieSearch) param.species = specieSearch as string;

    handleChangeSearchParams(param);
  }

  function handleClearField(field: string) {
    searchParams.delete(field);

    if (field === 'name') {
      setNameSearch('');
    } else if (field === 'status') {
      setStatusSearch('');
    } else if (field === 'species') {
      setSpecieSearch('');
    }

    handleChangeSearchParams(searchParams as SearchDataURLParams);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleChangeNameSearch} value={nameSearch as string} />

        <select onChange={handleChangeStatusSearch} value={statusSearch as string}>
          <option value="">Select the status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select onChange={handleChangeSpecieSearch} value={specieSearch as string}>
          <option value="">Select the specie</option>
          <option value="Alien">Alien</option>
          <option value="Animal">Animal</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Disease">Disease</option>
          <option value="Human">Human</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Poopybutthole">Poopybutthole</option>
          <option value="Robot">Robot</option>
          <option value="unknown">unknown</option>
        </select>

        <button type="submit">
          <SearchIcon />
        </button>
      </Form>

      <ContainerItems>
        {searchParams.get('name') && <span onClick={() => handleClearField('name')}>Name: {searchParams.get('name')} <EmptyIcon /></span>}
        {searchParams.get('status') && <span onClick={() => handleClearField('status')}>Status: {searchParams.get('status')} <EmptyIcon /></span>}
        {searchParams.get('species') && <span onClick={() => handleClearField('species')}>Specie: {searchParams.get('species')} <EmptyIcon /></span>}
      </ContainerItems>

    </Container>
  );
}
