import styled from 'styled-components'

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
