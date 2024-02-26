import styled from "styled-components";
import Navbar from "./Navbar";
const Hero = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
  `;
  return (
    <Section>
      <Navbar />
    </Section>
  );
};

export default Hero;
