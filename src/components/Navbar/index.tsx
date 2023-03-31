import {Container, ContainerLinks, StyledLink} from "../../styles/navBar";

function Navbar() {
  const menu = [
    {title: 'Home', router: '/'},
    {title: 'Favorites', router: '/Favorites'},
  ]

  return (
    <Container>
      <ContainerLinks>
        {menu.map(index => (
          <StyledLink key={index.title} href={index.router}>
            {index.title}
          </StyledLink>
        ))}
      </ContainerLinks>
    </Container>
  );
}

export default Navbar;