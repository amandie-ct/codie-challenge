import styled, { css } from 'styled-components'
import { ILogoProps } from './index'

export const Logo = styled.div<Pick<ILogoProps, 'isOpen'>>`
  ${($props) =>
    $props.isOpen &&
    css`
      width: 16.1875rem;
      p {
        display: block;
      }
    `}

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.regular_radius};
  width: fit-content;
  padding: 0.87rem;
  height: 3.8125rem;

  p {
    display: none;
    margin-left: 1.19rem;
    font-size: 1.25rem;
    font-weight: 600;
  }

  &:hover {
    cursor: pointer;
    width: 16.1875rem;
    transition: width 2s linear 3s;
    p {
      display: block;
    }
  }
`
