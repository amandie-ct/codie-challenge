import styled from 'styled-components'

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.light_pink};
  box-sizing: border-box;
  border: 1px solid ${({ theme }) => theme.colors.pink};
  border-radius: ${({ theme }) => theme.border.small_radius};
  width: 25.52rem;
  height: 15.9rem;
  color: ${({ theme }) => theme.colors.gray};
  padding: 1.25rem 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: 1.25rem;
    text-align: start;
  }
`
