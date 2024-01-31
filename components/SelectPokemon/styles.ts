import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 2rem 0;
`

export const Title = styled.p`
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
`

export const SubTitle = styled(Title)`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`
