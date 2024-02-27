import styled from "styled-components";
const Navbar = () => {
  const Section = styled.div`
    display: flex;
    justify-content: center;
  `;
  const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
  `;
  const Logo = styled.img`
    width: 150px;
    height: 100px;
  `;
  const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const List = styled.ul`
    display: flex;
    gap: 1em;
  `;
  const ListItem = styled.li`
    list-style: none;
  `;
  const Icon = styled.img``;
  const Button = styled.button``;

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="../../public/img/logo.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Studio</ListItem>
            <ListItem>Works</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Links>
          <Icons>
            <Icon src="../../public/img/search.png" />
            <Button>Hire Now</Button>
          </Icons>
        </Links>
      </Container>
    </Section>
  );
};

export default Navbar;
