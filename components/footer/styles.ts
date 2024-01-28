import styled from 'styled-components'

export const Footer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark_gray};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 4.5rem;

  p {
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.87rem;
  }
`
