import styled from 'styled-components'

export const Container = styled.main`
  padding: 0 3.8rem;
  height: 100%;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  margin-top: 8rem;
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

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const FormLabel = styled.label`
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 2rem;
`

export const Input = styled.input`
  width: 100%;
  height: 2.81rem;
  padding: 0.81rem 0.88rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.border.small_radius};
  border: 1px solid ${({ theme }) => theme.colors.medium_gray};

  &:focus {
    outline: none;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
`

export const FormSelect = styled.select`
  width: 16.56rem;
  height: 2.81rem;
  padding: 0.81rem 0.88rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.border.small_radius};
  border: 1px solid ${({ theme }) => theme.colors.medium_gray};
  appearance: none;
  text-transform: capitalize;

  &:focus {
    outline: none;
    cursor: pointer;
  }
`

export const Summary = styled.section`
  display: flex;
  flex-direction: column;
  margin: 32px 0;

  span {
    color: ${({ theme }) => theme.colors.gray};
    font: 8px;
    font-weight: 400;
  }
`
export const SummaryRows = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors.gray};
    margin: 4px 0;
  }
`
