
import styled from "styled-components";
import backgroundImage from "../../../public/images-hero-section/HomeHeroSection.jpg"; 

const HomeHeroSection = () => {
    return (
        <HeroContainer>
            <Content>
                <Title>
                    <Highlight>Erence Developers</Highlight> <Moving>- We craft digital excellence</Moving>
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
  color:rgb(24, 108, 244);
`;

const Moving = styled.span`
  color: white;
`;



export default HomeHeroSection;