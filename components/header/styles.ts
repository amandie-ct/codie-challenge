import styled from "styled-components";

export const Header = styled.nav`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5.2rem;
`

export const HeaderShortcuts = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.dark_gray};
        margin-right: 1.9rem;
    }
`