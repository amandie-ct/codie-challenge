import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 11.7rem;
  padding: 2rem 6.62rem;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.light_gray};
`

export const Breadcrumbs = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  font-weight: 700;
  margin: 0.75rem 0;
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  font-style: normal;
`
