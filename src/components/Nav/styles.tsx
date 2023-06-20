import {styled} from 'styled-components'

export const Container = styled.div`
    background-color: transparent;
`

export const NavBar = styled.div`
    max-width: 1440px;
    margin-inline: auto;

    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavContent = styled.nav`
    display: flex;
    gap: 2rem;
`

export const NavLink = styled.li`
    list-style: none;
`

export const Link = styled.a`
    text-decoration: none;
    font-family: 'Public Sans', sans-serif;
    color: var(--grayish-blue);
    font-size: .85rem;
    border-bottom: 1px solid var(--white);
    transition: .3s;

    &:hover{
        border-bottom: 1px solid var(--cyan);
        color: var(--cyan);
    }
`

export const Button = styled.a`
    font-family: 'Public Sans', sans-serif;
    text-decoration: none;
    font-size: .8rem;
    font-weight: var(--regular);

    padding: .8rem 2rem;
    background-image: linear-gradient(to right, var(--lime-green), var(--cyan));
    color: var(--white);
    border-radius: 2rem;
`
