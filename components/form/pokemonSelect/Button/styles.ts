import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  width: 15.8125rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.dark_gray};
  border-radius: ${({ theme }) => theme.border.regular_radius};
  height: 2.625rem;
  padding: 0.8rem 0.8rem;
  cursor: pointer;
  margin: 2rem 0;

  p {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.dark_gray};

    &:last-child {
      margin-left: 0.7rem;
    }
  }
`
