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
    justify-content: center;
    align-items: flex-start;
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
    font-size: 1.75vw;
    margin: 3vh 0 2vh 0;
  `;

  const StyledTitle = styled.h3`
    font-size: 2.5vw;
    margin-bottom: 1vh;
  `;

  const StyledSubtitle = styled.h2`
    font-size: 2.25w;
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
            Ofrecemos salas flexibles dentro de nuestra nave, listas para que grupos de amigos se reúnan, jueguen, trabajen en proyectos o simplemente pasen un buen rato juntos. Cada espacio está equipado y pensado para que os sintáis cómodos, con privacidad y todo lo necesario para disfrutar sin preocupaciones.
          </StyledText>

          <StyledSubtitle>¿A quién no le gusta la fiesta?</StyledSubtitle>
          <StyledText>
            Y si os apetece seguir la diversión, muy cerca hay una discoteca para
            continuar la noche bailando y disfrutando.
          </StyledText>

          <StyledTitle>¿Dónde nos podéis encontrar?</StyledTitle>
          <StyledText>Nos podéis encontrar en la calle: Oiartzun, Astigarrako Bidea.</StyledText>

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
