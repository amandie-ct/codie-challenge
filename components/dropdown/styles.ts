import styled from 'styled-components'

export const Dropdown = styled.div`
  margin: 0 auto;
  width: 400px;
  position: relative;
`

export const DropdownBtn = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: space-between;
  height: 2.81rem;
  padding: 0.81rem 0.88rem;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.medium_gray};
  border-radius: ${({ theme }) => theme.border.small_radius};

  span {
    font-size: 1rem;
  }
`

export const DropdownContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  position: absolute;
  top: 87%;
  height: fit-content;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
  border: 1px solid ${({ theme }) => theme.colors.medium_gray};
  border-top: 1px solid ${({ theme }) => theme.colors.medium_gray};
  border-bottom-left-radius: ${({ theme }) => theme.border.small_radius};
  border-bottom-right-radius: ${({ theme }) => theme.border.small_radius};
  padding-bottom: 5px;
`

export const DropdownItem = styled.div`
  padding: 0.81rem 0.88rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f4f4f4;
    font-weight: bold;
  }
`
