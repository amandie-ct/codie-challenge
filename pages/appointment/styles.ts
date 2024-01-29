import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Appointment = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid red;
  margin: 0 auto;
`

export const FormContainer = styled.div`
  display: flex;
  font-family: Inter;
  width: 100%;
  justify-content: space-around;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 50%;
`

export const FormLabel = styled.label`
  font-size: 12px;
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const FormInput = styled.input`
  width: 16.56rem;
  height: 2.81rem;
  padding: 0.81 rem 0.88rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.border.small_radius};
  border: 1px solid ${({ theme }) => theme.colors.medium_gray};

  &:focus {
    outline: none;
  }
`
