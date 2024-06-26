import styled from 'styled-components'

export const Logo = styled.div`
  width: 16.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.regular_radius};
  width: fit-content;
  padding: 0.87rem;
  height: 3.8125rem;

  p {
    margin-left: 1.19rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
    width: 16.1875rem;
    transition: 0.3s width ease-in-out;
    p {
      display: block;
    }
  }
`
