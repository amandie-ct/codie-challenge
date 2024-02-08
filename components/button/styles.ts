import styled from 'styled-components'

export const Button = styled.button<{ $width: number }>`
  display: flex;
  width: ${(props) => props.$width};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.font.sizes.small};
  border: none;
  border-radius: ${({ theme }) => theme.border.regular_radius};
  height: 2.625rem;
  padding: 0 0.6rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    margin: 0;
  }
`
