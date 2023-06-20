import {Container, NavBar, NavLink, NavContent, Link, Button} from './styles'

import logo from '../../assets/images/logo.svg'

export const Nav = () => {
    return(
        <Container>
            <NavBar>
                <img src={logo} alt="Logo img" />
                <NavContent>
                    <NavLink><Link href="#">Home</Link></NavLink>
                    <NavLink><Link href="#">About</Link></NavLink>
                    <NavLink><Link href="#">Contact</Link></NavLink>
                    <NavLink><Link href="#">Blog</Link></NavLink>
                    <NavLink><Link href="#">Careers</Link></NavLink>
                </NavContent>
                <Button href="#">Request Invite</Button>
            </NavBar>
        </Container>
    )
}