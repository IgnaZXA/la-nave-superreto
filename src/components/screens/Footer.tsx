import styled from "styled-components";

export function Footer() {

  const StyledFooter = styled.footer`
    width: 100%;
    min-height: 20vh;
    background-color: #111;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
  `;

  const FooterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5vw;
    max-width: 1200px;
    width: 100%;
  `;

  const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    margin: 2vw; /* margen extra para separar columnas */
  `;

  const FooterTitle = styled.h3`
    margin-bottom: 1rem;
    font-size: 1.8vw; /* escalable */
    font-weight: 600;
    text-transform: uppercase;
  `;

  const FooterLink = styled.a`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-weight: 300;
    font-size: 1.2vw; /* escalable */
    transition: color 0.2s;

    &:hover {
      color: #ff7b00;
    }
  `;

  const FooterInfo = styled.p`
    margin: 0.3rem 0;
    font-weight: 300;
    font-size: 1.2vw; /* escalable */
  `;

  return (
    <StyledFooter>
      <FooterContainer>

        <FooterColumn>
          <FooterTitle>Soporte</FooterTitle>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Contacto</FooterLink>
          <FooterLink href="#">Ayuda Técnica</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Información</FooterTitle>
          <FooterInfo>📞 +34 634 567 890</FooterInfo>
          <FooterInfo>📍 Astigarragako Kalea 4, Oiartzun</FooterInfo>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Redes Sociales</FooterTitle>
          <FooterLink href="#">Instagram</FooterLink>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Twitter</FooterLink>
        </FooterColumn>

      </FooterContainer>
    </StyledFooter>
  );
}
