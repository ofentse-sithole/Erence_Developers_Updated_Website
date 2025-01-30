import { useEffect } from "react";
import styled from "styled-components";
import backgroundImage from "../../../public/images-hero-section/AboutHeroSectionReformed1.jpg";

const AboutHeroSection = () => {

  useEffect(() => {
    // More robust scroll handling
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      
      // Fallback for older browsers
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }, 100);
  }, []);

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

  /* Responsive design */
  @media (max-width: 768px) {
    background-position: top center;
  }
`;

const Content = styled.div`
  text-align: left;
  color: black;
  padding: 20px; /* Add some padding for mobile screens */
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;

  /* Responsive typography */
  @media (max-width: 768px) {
    font-size: 2rem;  /* Reduce font size for smaller screens */
  }
`;

const Highlight = styled.span`
  color: white;
`;

export default AboutHeroSection;
