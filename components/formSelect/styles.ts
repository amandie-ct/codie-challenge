import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;
`

export const SelectLabel = styled.label`
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark_gray};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  margin-top: 2rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const ArrowIcon = styled.div`
  position: absolute;
  transform: rotate(90deg);
  top: -20;
  right: 50;
  font-weight: 300;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.gray};
`
