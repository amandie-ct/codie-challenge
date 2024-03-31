import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const About = styled.section`
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 4.5rem;
  width: 29rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
  line-height: 25px;

  p {
    margin: 1.5rem 0;
  }
`
