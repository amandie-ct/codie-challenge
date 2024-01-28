import styled from 'styled-components'

export const Button = styled.div`
  display: flex;
  padding: 0 0.56rem;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.small};
  border-radius: ${({ theme }) => theme.border.regular_radius};
  min-width: 10.75rem;
  height: 2.625rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }
`
