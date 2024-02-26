import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Who from "./components/who";
import styled from "styled-components";

const App = () => {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background: url("../public/img/bg.jpeg");
    &::-webkit-scrollbar {
      display: none;
    }
  `;
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
};

export default App;
