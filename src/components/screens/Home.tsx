import { MyAppNav } from "../MyAppNav";
import styled from "styled-components";
import logo from './../../../src/assets/images/LANAVE.webp';
import homeBg1 from './../../../src/assets/images/Home_background_1.webp';
import { Footer } from "./Footer";

export function Home() {

  const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    gap: 1rem;
  `;

const StyledFirstHomeSection = styled.div`
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
    url(${homeBg1});
  background-repeat: no-repeat;     
  background-size: cover;           
  background-position: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 60vh;
`;

  const Container = styled.div`
    position: relative;
    top: -8%;
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const StyledLogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `;
  
  const StyledLogoImage = styled.img`
    box-shadow: rgba(182, 111, 19, 0.8) 0.8vh 0.1vh 0.5vh 0.5vh;
    border: 0.25vh solid rgba(255, 123, 0, 0.77);
    width: 14vw;
    height: 14vw;
    border-radius: 100%;
  `;

  const StyledSlogan = styled.p`
    color: white;
    font-size: 1.6rem;
    font-weight: 300;
    letter-spacing: 0.15rem;
    text-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    margin: 0;
  `;

  return (
    <>
      <MyAppNav />
      <StyledHome>
        <StyledFirstHomeSection>
          <Container>
            <StyledLogoContainer>
              <StyledLogoImage src={logo} alt="La Nave Logo" />
              <StyledSlogan>Un espacio, mil planes.</StyledSlogan>
            </StyledLogoContainer>
          </Container>
        </StyledFirstHomeSection>
        <Footer />

      </StyledHome>
    </>
  );
}
