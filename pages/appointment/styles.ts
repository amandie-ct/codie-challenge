import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
export const Appointment = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  h1 {
    padding-top: 2rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: Inter;
  align-items: center;
  justify-content: space-evenly;
`

export const AppointmentSummary = styled.section`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.5rem;
  font-weight: 400;
`
export const SummaryBlocks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.87rem;
  padding-bottom: 0.5rem;

  &:last-child {
    padding-top: 2.45rem;
    color: ${({ theme }) => theme.colors.dark_gray};
    font-size: 1.5rem;
    font-weight: 600;
  }
`
