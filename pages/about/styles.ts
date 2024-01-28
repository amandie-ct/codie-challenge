import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const About = styled.section`
    margin: 0 auto;
    padding-top: 2.15rem;
    padding-bottom: 4.5rem;
    width: 25.5rem;
    font-size: 1.125rem;
    color: ${({theme}) => theme.colors.black};
    line-height: 140%;
`