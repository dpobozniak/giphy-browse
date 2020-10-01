import React, { FunctionComponent, FormEvent, ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import Input from '../UI/FormInput/FormInput';
import Button from '../UI/Button/Button';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  flex: 1;
  min-width: 15em;
`;

type TSearchForm = {
  initialValue: string,
  onSubmit: (value: string) => void,
};

const SearchForm: FunctionComponent<TSearchForm> = ({ initialValue = '', onSubmit }: TSearchForm) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit(searchValue);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearchValue(value);
  };

  return (
    <Form role="search" onSubmit={handleFormSubmit}>
      <Input type="text" name="search" id="fsearch" value={searchValue} onChange={handleInputChange} placeholder="Search GIFs by keyword" label="Search:" labelHidden />
      <Button $kind="primary" type="submit">Search</Button>
    </Form>
  );
};

export default SearchForm;
