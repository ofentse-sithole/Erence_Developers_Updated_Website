import { useEffect } from "react";
import styled from "styled-components";
import backgroundImage from "../../../public/images-hero-section/OrderHeroSectionReformed1.jpg";

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
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 100);
  }, []);

  return (
    <HeroContainer>
      <Content>
        <Title>
          <Highlight>Order</Highlight>
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
  padding: 0 20px; /* Adds padding to prevent content from touching edges on small screens */

  @media (max-width: 768px) {
    height: 80vh; /* Adjust height for mobile screens */
  }
`;

const Content = styled.div`
  text-align: center; /* Center-align the text */
  color: black;
  padding: 0 15px; /* Prevents text from sticking to the edges on mobile */
`;

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem; /* Smaller font size for mobile devices */
  }
`;

const Highlight = styled.span`
  color: white;
`;

export default AboutHeroSection;
