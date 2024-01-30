import styled from 'styled-components'

export const SelectContainer = styled.div`
  position: relative;
  width: ;
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
`

export const ArrowIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`
