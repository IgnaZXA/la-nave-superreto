import styled from "styled-components";
import { MyAppNav } from "../MyAppNav";
import aboutUs from './../../../src/assets/images/AboutUs.webp';
import map from './../../../src/assets/images/LocationMap.webp';
import { Footer } from "./Footer";
import ParaphraseColumns from "../Opiniones";

export function AboutUs() {
  const StylesScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: 90vh;
    padding: 2vh 0;
    background-image: url(${aboutUs});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow-x: hidden; /* evita scroll horizontal */
    box-sizing: border-box;
  `;

  const StyledTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;     
    text-align: center;
    border: 0.15vw solid rgba(18, 28, 110, 1);
    background-color: rgba(0, 0, 0, 0.79);
    border-radius: 3vw;
    width: 85%;
    padding: 2vw;
    font-size: 1.75vw;
    margin: 3vh 0 2vh 0;
    box-sizing: border-box; /* incluye padding dentro del width */
  `;

  const StyledTitle = styled.h3`
    font-size: 2.5vw;
    margin-bottom: 1vh;

    @media (max-width: 768px) {
      font-size: 4vw; /* se adapta a pantallas pequeñas */
    }
  `;

  const StyledSubtitle = styled.h2`
    font-size: 2.25vw;
    margin-bottom: 1vh;

    @media (max-width: 768px) {
      font-size: 3.5vw;
    }
  `;

  const StyledText = styled.p`
    padding: 1vw;
    margin: 0.5vh 0;
    font-size: 1.5vw;

    @media (max-width: 768px) {
      font-size: 3vw;
    }
  `;

  const MapLink = styled.a`
    width: 100%;
    max-width: 600px;
    margin-bottom: 5vh;
    display: block;
  `;

  const MapImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 1vw;
  `;

  const OpinionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 1200px;
    margin: 5vh auto;
    box-sizing: border-box;
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
            <MapImage src={map} alt="Mapa de ubicación" />
          </MapLink>
        </StyledTextDiv>
      </StylesScreenContainer>

      <OpinionsContainer>
        <StyledTitle>Algunas opiniones de nuestros clientes</StyledTitle>
        <ParaphraseColumns />
      </OpinionsContainer>

      <Footer />
    </>
  );
}
