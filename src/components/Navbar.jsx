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
    height: 50px;
  `;
  const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  `;

  const List = styled.ul`
    display: flex;
    gap: 1em;
  `;
  const ListItem = styled.li`
    list-style: none;
  `;
  const Icon = styled.img`
    width: 20px;
    cursor: pointer;
  `;
  const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;

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
