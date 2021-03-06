import styled from 'styled-components';

import { ThemeProps } from '../../styles/themes';

export const Container = styled.div`
  margin-bottom: 48px;

  @media(max-width: 655px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media(max-width: 435px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Form = styled.form`
  display: grid;
  width: 60%;
  grid-template-columns: 1.5fr 1fr 1fr 0.5fr;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  input,
  select,
  button {
    border: 1px solid;
    border-color: ${(props: ThemeProps) => props.theme.borderColor};
    outline: 0;
    background: ${(props: ThemeProps) => props.theme.inputBackgroundColor};
    border-radius: 4px;

    padding: 0 16px;
    height: 2.5rem;
    font-size: 0.9rem;
    color: ${(props: ThemeProps) => props.theme.textColor};

    &::placeholder{
      color: ${(props: ThemeProps) => props.theme.textColor};
      opacity: 0.7;
    }
  }

  button {
    background: ${(props: ThemeProps) => props.theme.inputBackgroundColor};
    font-weight: 500;
  }

  @media(max-width: 655px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr 1fr;

    input {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  }

  @media(max-width: 435px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: 1fr;

    input {
      grid-column-start: 1;
      grid-column-end: 1;
    }
  }

`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  max-width: 600px;
  width: 100%;

  span{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    background: ${(props: ThemeProps) => props.theme.inputBackgroundColor};
    font-weight: 500;
    border-radius: 4px;
    font-size: 0.9rem;
    padding: 4px;
  }

  @media(max-width: 350px){
    grid-template-columns: 1fr;
  }
`;
