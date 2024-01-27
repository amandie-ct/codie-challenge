import styled from "styled-components";


export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.red};
    color:  ${({ theme }) => theme.colors.white};
    font-size:  ${({ theme }) => theme.font.sizes.small};
    border-radius: ${({ theme }) => theme.border.regular_radius};
    width: 10.75rem;
    height: 2.625rem;
`