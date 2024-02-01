import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 16.5625rem;
`
