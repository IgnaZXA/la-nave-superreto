import styled from "styled-components";
import { MyAppNav } from "../MyAppNav";
import logo from './../../../src/assets/images/LANAVE.png';
import homeBg1 from './../../../src/assets/images/Home_background_1.png';

export function Home() {

  const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    gap: 1rem;
  `;

  const StyledFirstHomeSection = styled.div`
    background-image : url(${homeBg1});
    background-repeat: no-repeat;     
    background-size: cover;           
    background-position: center;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100vh ;
  `;

  const StyledLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;             
    margin-bottom: 2rem;     
  `;
  
  const StyledLogoImage = styled.img`
    border : 0.25vh solid rgba(255, 123, 0, 0.77);
    width: 14vw;
    height: 14vw;
    border-radius: 100%;
  `;

  const Container = styled.div`
    position: relative;
    top: -8%;
  `;

  return (
    <>
      <MyAppNav />
      <StyledHome>
      <StyledFirstHomeSection>
        <Container>
          <StyledLogoContainer>
            <StyledLogoImage src={logo} alt="La Nave Logo" />
          </StyledLogoContainer>
        </Container>
      </StyledFirstHomeSection>
      </StyledHome>

    </>
  );
}