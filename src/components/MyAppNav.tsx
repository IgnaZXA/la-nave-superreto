import { NavLink } from "react-router";
import styled from "styled-components";

export function MyAppNav() {

  const StyledNavContainer = styled.div`
    
    border: 1px solid rgba(255, 174, 0, 0.39);
    background-color: rgba(32, 32, 32, 1);
    padding: 2.5vw 0px 0px 0px;
    font-size: 0.9vw;
    
    nav {
      display: flex;
      gap: 2rem;      
      align-items: center;
    }

    a {
      text-decoration: none;
      color: rgb(255,255,255);
      font-weight: 500;
    }

    a.active {
      color: #0077ff;
      font-weight: 700;
    }
  `;

  const NavLinkContainer = styled.div`
    margin: 0px 8vh 1vw 2vh;
  `;

  return (
    <StyledNavContainer>
      <nav>
        <NavLinkContainer>
          <NavLink to="/" end> La Nave</NavLink>
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
