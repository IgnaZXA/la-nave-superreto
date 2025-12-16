import styled from "styled-components";
import { MyAppNav } from "../MyAppNav";
import aboutUs from './../../../src/assets/images/AboutUs.png';

export function AboutUs() {

  const StylesScreenContainer = styled.div`
    background-image : url(${aboutUs});
    background-repeat: no-repeat;     
    background-size: cover;           
    background-position: center;
    display: flex;
    width: 100%;
    height: 90vh ;
  `;

  const StyledTextDiv = styled.div`
    text-align: center;
    border: 0.15vw solid rgba(18, 28, 110, 1);
    background-color: rgba(0, 0, 0, 0.79);
    border-radius: 3vw;
    position: relative;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0%); 
    padding: 2vw;
    margin-top: 3vh;
    width: 100%;
    height: 30%;
    font-size: 1vw;
  `;

  const StyledText = styled.p`
    padding: 2vw;
  `;


  return (
    <>
      <MyAppNav />
      <StylesScreenContainer>
        <StyledTextDiv>
          <h3>¿No encontrais donde hacer vuestros planes?</h3>
          <StyledText>
            Nuestra empresa se dedica a ofrecer espacios flexibles dentro de una nave industrial, 
            facilitando el alquiler de salas equipadas para grupos de personas. 
            Nuestro objetivo es proporcionar un entorno cómodo y funcional donde equipos, 
            asociaciones o colectivos puedan reunirse, trabajar en proyectos, realizar talleres o encuentros, 
            sin preocuparse por la logística de un espacio propio. Cada sala está diseñada para adaptarse a diferentes necesidades, 
            ofreciendo privacidad, amplitud y las comodidades necesarias para que cada reunión o actividad se desarrolle de manera óptima.
          </StyledText>
        </StyledTextDiv>
      </StylesScreenContainer>
    </>
  );
}