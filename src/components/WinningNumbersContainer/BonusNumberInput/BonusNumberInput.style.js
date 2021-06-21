import styled, { css } from 'styled-components';

export const BonusNumberWrapper = styled.div`
  margin-bottom: 1rem;

  & p {
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    text-align: center;
    font-weight: bold;
  }
`;

export const InputCss = css`
  color: #c71f1f;
  font-size: 1rem;
  font-weight: bold;
  height: 36px;
  margin-left: 0.25rem;
  margin-right: 0.25rem;
  text-align: center;
  width: 40px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
