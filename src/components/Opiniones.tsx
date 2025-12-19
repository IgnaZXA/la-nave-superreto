import styled from "styled-components";

// Contenedor principal
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: rgba(128, 0, 128, 0.1); // morado con poca opacidad
  border-radius: 8px;
`;

// Cada columna
const Column = styled.div`
  flex: 1;
  margin: 0 10px;
  font-style: italic; // estilo de parafraseo
  font-size: 1.5vw;
  line-height: 1.6;
`;

const ParaphraseColumns = () => {
  return (
    <Container>
      <Column>
        "¡Increíble ambiente! La música estaba perfecta y la pista siempre llena de energía. 
        Me encantó cómo cuidaban cada detalle, desde la iluminación hasta el servicio. Sin duda volveremos!"
      </Column>
      <Column>
        "El local superó nuestras expectativas. Espacioso, bien iluminado y con todo lo necesario para nuestra celebración.
        El personal fue muy atento y nos ayudó en cada detalle. ¡Repetiremos seguro!"
      </Column>
      <Column>
        "Fuimos un grupo de siete amigos y todos quedamos encantados. La sala es muy cómoda, así que pudimos movernos y disfrutar sin molestias. La pantalla y el sonido eran excelentes, y nos permitió concentrarnos totalmente en la película. Sin duda repetiremos."
      </Column>
    </Container>
  );
};

export default ParaphraseColumns;