
import styled from "styled-components";
import backgroundImage from "../../../public/images-hero-section/AboutHeroSection.jpg";

const AboutHeroSection = () => {
    return (
        <HeroContainer>
            <Content>
                <Title>
                    <Highlight>About Us</Highlight>
                </Title>
            </Content>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Content = styled.div`
  text-align: left;
  color: black;
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;
`;

const Highlight = styled.span`
  color: white;
`;




export default AboutHeroSection;