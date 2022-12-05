import styled from '@emotion/styled';

export const Form = styled.form`
  width: 700px;
  padding: 10px;
  border: 1.5px solid #2f9e99;
  border-radius: 8px;
  margin: 0 auto;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-family: Courier New, monospace;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  padding: 0 20px;
  margin-bottom: 10px;
  background: #e9eff6;
  line-height: 40px;
  border-radius: 20px;
  border: 1px solid coral;
  font-size: 18px;
  margin-top: 10px;
  outline: none;

  :hover,
  :focus,
  :active {
    border: 2px solid coral;
  }
`;

export const Button = styled.button`
  display: flex;
  margin: 0 auto;
  height: 20px;
  padding: 15px;
  font-family: Andale Mono, monospace;
  font-size: 18px;

  border-radius: 20px;
  border-style: none;
  align-items: center;
  cursor: pointer;

  background-color: #f69a73;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover,
  :focus {
    background-color: coral;
  }
`;
