import styled from "styled-components";
import Navbar from "./Navbar";

const Hero = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;
  const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
  `;
  const Left = styled.div``;
  const Right = styled.div``;
  const Title = styled.h1``;
  const WhatWeDo = styled.div``;
  const Line = styled.img``;
  const Subtitle = styled.p``;
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think, Make, Solve.</Title>
          <WhatWeDo>
            <Line src="../../public/img/line.png" />
            <Subtitle>What We Do?</Subtitle>
          </WhatWeDo>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  );
};

export default Hero;
