import styled from '@emotion/styled';

export const Header = styled.header`
  max-width: 100%;
  background-color: #4354b0;
  padding: 15px;
`;

export const HeaderForm = styled.form`
  margin: 0 auto;
  display: flex;
  font-family: inherit;
  justify-content: center;
  align-items: center;
  span {
    display: block;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px transparent solid;
    padding: 0 5px;
    height: 34px;
    background-color: #fff;
    cursor: pointer;
  }
  input {
    border: 1px transparent solid;
    height: 34px;
    padding: 0 5px;
    outline: none;
    border: none;
    font-size: 16px;
  }
`;
