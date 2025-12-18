import { NavLink } from "react-router";
import styled from "styled-components";

const StyledNavContainer = styled.div`
  border: 1px solid rgba(255, 174, 0, 0.39);
  background-color: rgba(32, 32, 32, 1);
  padding: 2% 0;
  font-size: clamp(0.8rem, 1vw, 1.2rem);

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: rgb(255, 255, 255);
    font-weight: 500;
    margin: 0 2px;
    display: inline-block;
    transition: transform 0.3s cubic-bezier(.34,1.56,.64,1);
  }

  a:hover {
    transform: scale(1.15);
  }

  a.active {
    color: #0077ff;
    font-weight: 700;
  }
`;

const NavLinkContainer = styled.div`
  margin: 0.5rem;
  padding: 0.5rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid rgba(250, 156, 14, 1);
  font-size: 1.5vw;
  padding: 1vw;
  
  @media (max-width: 600px) {
    padding: 0.3rem 0.8rem;
    border-radius: 0.8rem;
  }
`;

export function MyAppNav() {
  return (
    <StyledNavContainer>
      <nav>
        <NavLinkContainer>
          <NavLink to="/" end>La Nave</NavLink>
        </NavLinkContainer>

        <NavLinkContainer>
          <NavLink to="/AboutUs" end>Sobre Nosotros</NavLink>
        </NavLinkContainer>

        <NavLinkContainer>
          <NavLink to="/MakeReservation">Haz una reserva</NavLink>
        </NavLinkContainer>
      </nav>
    </StyledNavContainer>
  );
}
