import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 3.8rem;
`

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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Group = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Single = styled.div``
