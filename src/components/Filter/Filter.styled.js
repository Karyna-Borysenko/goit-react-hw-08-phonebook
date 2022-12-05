import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 15px;
  border: 1.5px solid #2f9e99;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 10px;
  font-family: Andale Mono, monospace;
`;

export const Input = styled.input`
  display: block;
  width: 620px;
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
  :focus {
    border: 1px solid #c73500;
  }
`;
