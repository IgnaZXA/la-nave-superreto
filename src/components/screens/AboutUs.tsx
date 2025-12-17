import styled from "styled-components";
import { MyAppNav } from "../MyAppNav";
import aboutUs from './../../../src/assets/images/AboutUs.webp';
import map from './../../../src/assets/images/LocationMap.webp';
import { Footer } from "./Footer";

export function AboutUs() {

  const StylesScreenContainer = styled.div`
    background-image: url(${aboutUs});
    background-repeat: no-repeat;     
    background-size: cover;           
    background-position: center;
    display: flex;
    justify-content: center;  /* centra horizontalmente */
    align-items: flex-start;  /* empieza desde arriba */
    width: 100%;
    min-height: 90vh;
    padding: 2vh 0;
  `;

  const StyledTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;     
    text-align: center;
    border: 0.15vw solid rgba(18, 28, 110, 1);
    background-color: rgba(0, 0, 0, 0.79);
    border-radius: 3vw;
    padding: 2vw;
    width: 70%;
    font-size: 1vw;
    margin: 3vh 0 2vh 0;  /* separa del container */
  `;

  const StyledTitle = styled.h3`
    font-size: 2vw;
    margin-bottom: 1vh;
  `;

  const StyledText = styled.p`
    padding: 2vw;
    margin: 0.5vh 0;
  `;

  const MapLink = styled.a`
    width: fit-content;
  `;

  return (
    <>
      <MyAppNav />
      <StylesScreenContainer>
        <StyledTextDiv>
          <StyledTitle>¿No encontráis dónde hacer vuestros planes?</StyledTitle>
          <StyledText>
            Nuestra empresa se dedica a ofrecer espacios flexibles dentro de una nave industrial, 
            facilitando el alquiler de salas equipadas para grupos de personas. 
            Nuestro objetivo es proporcionar un entorno cómodo y funcional donde equipos, 
            asociaciones o colectivos puedan reunirse, trabajar en proyectos, realizar talleres o encuentros, 
            sin preocuparse por la logística de un espacio propio. Cada sala está diseñada para adaptarse a diferentes necesidades, 
            ofreciendo privacidad, amplitud y las comodidades necesarias para que cada reunión o actividad se desarrolle de manera óptima.
          </StyledText>

          <StyledTitle>¿Dónde nos podeis encontrar?</StyledTitle>
          <StyledText>Nos podeis encontrar en Oiartzun, Astigarrako Bidea.</StyledText>

          <MapLink
            href="https://www.google.es/maps/@43.3004689,-1.8809756,20.35z"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={map} alt="Mapa de ubicación" style={{objectFit: "contain" }} />
          </MapLink>


        </StyledTextDiv>
      </StylesScreenContainer>
      <Footer />
    </>
  );
}
