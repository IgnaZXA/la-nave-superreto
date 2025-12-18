import styled from "styled-components";
import { MyAppNav } from "../MyAppNav";
import { Footer } from "./Footer";

export function MakeReservation() {
  return (
    <>
      <MyAppNav />

      <StyledScreenContainer>
        <StyledButtonContainer>
          <StyledTitle>Reserva tu sala</StyledTitle>

          <StyledOptionsContainer>
            <StyledButton>
              <h2>Hacer reserva de un día</h2>
            </StyledButton>

            <StyledButton>
              <h2>Hacer una reserva de una semana</h2>
            </StyledButton>

            <StyledButton>
              <h2>Hacer una reserva de un mes</h2>
            </StyledButton>
          </StyledOptionsContainer>

          <StyledMemberButton>
            Hazte socio y disfruta
          </StyledMemberButton>
        </StyledButtonContainer>
      </StyledScreenContainer>

      <Footer />
    </>
  );
}

/* =========================
   CONTAINERS
========================= */

const StyledScreenContainer = styled.div`
  min-height: 70vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  background-color: #FF8B00;
`;

const StyledButtonContainer = styled.div`
  width: 85vw;
  height: min(60vh, 700px);

  border-radius: 20px;
  border: 3px solid #FFC60B;
  background-color: #444444;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;


const StyledOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

/* =========================
   TEXT
========================= */

const StyledTitle = styled.h1`
  font-size: clamp(1.6rem, 2.5vw, 3.2rem);
  font-weight: bold;
  text-align: center;
`;
/* =========================
   BUTTONS
========================= */

const StyledButton = styled.button`
  min-width: 240px;
  width: 25vw;
  padding: clamp(14px, 2vw, 20px);
  border-radius: 12px;
  border: none;
  cursor: pointer;

  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
  background-color: #FFC60B;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: transform 0.2s, box-shadow 0.2s;

  h2 {
    font-size: clamp(1rem, 1.4vw, 1.4rem);
    margin: 0;
    text-align: center;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.4);
  }
`;

const StyledMemberButton = styled.button`
  margin-top: 20px;
  padding: clamp(14px, 2vw, 20px) clamp(30px, 4vw, 50px);
  font-size: 1.5vw;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  width: 60%;
  height: 25%;

  background-color: #FEFFDB;
  color: #444444;

  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.35);
  }
`;
