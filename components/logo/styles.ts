import styled from 'styled-components'

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.regular_radius};
  width: 16.1875rem;
  height: 3.8125rem;

  p {
    margin-left: 1.19rem;
    font-size: 1.25rem;
    font-weight: 600;
  }
`
