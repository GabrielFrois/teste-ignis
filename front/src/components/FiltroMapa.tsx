import React, { useState } from 'react';  // Importa o React e o hook useState para gerenciar o estado do componente
import styled from 'styled-components';  // Importa a biblioteca styled-components para criar componentes com estilos

// Componente principal
const FiltroMapa: React.FC = () => {
  const [index, setIndex] = useState(0); // Usa o hook useState para controlar o índice do slider (que alterna entre as camadas)

  // Define os nomes das camadas que serão usadas no slider
  const estados = ['Focos', 'Área de Calor', 'Riscos'];
  // Define as cores correspondentes para cada camada
  const cores = ['#4CAF50', '#FF9800', '#D32F2F'];

  // Função que gera o slider com a cor de fundo e a posição do "thumb" (controle deslizante) de acordo com o estado atual
  const atualizarEstado = () => {
    return (
      <Slider style={{ backgroundColor: cores[index] }}>  {/* Define a cor de fundo do slider com base no estado atual */}
        <SliderThumb style={{ transform: `translateX(${index * 122}px)` }} /> {/* Mover o thumb (controle) para a posição correta */}
      </Slider>
    );
  };

  return (
    <FiltroContainer>  {/* Contêiner principal que envolve todos os filtros */}
      <Filtros>  {/* Contêiner para os filtros dentro do filtro principal */}
        
        {/* Rótulos das opções do slider (Focos, Área de Calor, Riscos) */}
        <ToggleLabels>
          <span>Focos</span>
          <span>Área de Calor</span>
          <span>Riscos</span>
        </ToggleLabels>

        {/* Slider clicável que alterna o índice entre as camadas */}
        <SliderContainer onClick={() => setIndex((index + 1) % estados.length)}>
          {atualizarEstado()} {/* Chama a função que renderiza o slider com a posição e cor corretas */}
        </SliderContainer>

        {/* Dropdown de seleção de estados */}
        <label htmlFor="estado">Estados</label>
        <Select id="estado" name="estado">
          <option value="">Selecione um estado</option>  {/* Opção padrão */}
          {/* Lista de estados brasileiros */}
          <option value="ac">Acre</option>
          <option value="al">Alagoas</option>
          <option value="ap">Amapá</option>
          <option value="am">Amazonas</option>
          <option value="ba">Bahia</option>
          <option value="ce">Ceará</option>
          <option value="df">Distrito Federal</option>
          <option value="es">Espírito Santo</option>
          <option value="go">Goiás</option>
          <option value="ma">Maranhão</option>
          <option value="mt">Mato Grosso</option>
          <option value="ms">Mato Grosso do Sul</option>
          <option value="mg">Minas Gerais</option>
          <option value="pa">Pará</option>
          <option value="pb">Paraíba</option>
          <option value="pr">Paraná</option>
          <option value="pe">Pernambuco</option>
          <option value="pi">Piauí</option>
          <option value="rj">Rio de Janeiro</option>
          <option value="rn">Rio Grande do Norte</option>
          <option value="rs">Rio Grande do Sul</option>
          <option value="ro">Rondônia</option>
          <option value="rr">Roraima</option>
          <option value="sc">Santa Catarina</option>
          <option value="sp">São Paulo</option>
          <option value="se">Sergipe</option>
          <option value="to">Tocantins</option>
        </Select>

        {/* Dropdown de seleção de biomas */}
        <label htmlFor="bioma">Biomas</label>
        <Select id="bioma" name="bioma">
          <option value="">Selecione um bioma</option>  {/* Opção padrão */}
          {/* Lista de biomas do Brasil */}
          <option value="amazonia">Amazônia</option>
          <option value="caatinga">Caatinga</option>
          <option value="cerrado">Cerrado</option>
          <option value="mata-atlantica">Mata Atlântica</option>
          <option value="pantanal">Pantanal</option>
          <option value="pampa">Pampa</option>
        </Select>

        {/* Filtro de intervalo de datas */}
        <Datas>
          <Label>Datas:</Label>
          <InputGroup>
            <InputContainer>
              <Label htmlFor="inicio">Início</Label>
              {/* Input de data para selecionar o início do intervalo */}
              <Input type="date" id="inicio" name="inicio" min="2025-03-20" max="2025-03-27"/>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="fim">Fim</Label>
              {/* Input de data para selecionar o fim do intervalo */}
              <Input type="date" id="fim" name="fim" min="2025-03-20" max="2025-03-27"/>
            </InputContainer>
          </InputGroup>
        </Datas>

        {/* Botão para aplicar os filtros */}
        <AplicarButton>Aplicar</AplicarButton>
      </Filtros>
    </FiltroContainer>
  );
};

export default FiltroMapa;  // Exporta o componente para ser utilizado em outras partes do aplicativo

// Estilos com styled-components

// Estilo para o contêiner principal do filtro
const FiltroContainer = styled.div`
  font-weight: bold;  
  padding: 20px;
  background-color: #d32f2f;  /* Cor de fundo vermelha */
  height: 83vh;  /* Altura do filtro */
  width: 350px;  /* Largura do filtro */
  border-radius: 0px 8px 8px 8px;  /* Bordas arredondadas */
  z-index: 1;
  margin-top: 2%;  /* Margem superior */
  position: fixed;  /* Fixa o filtro na tela */
`;

// Estilo para o contêiner de filtros internos
const Filtros = styled.div`
  padding: 10px 0;
`;

// Estilo para os rótulos que ficam acima do slider
const ToggleLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

// Estilo para o contêiner do slider
const SliderContainer = styled.div`
  margin: 10px 0;
`;

// Estilo para o slider em si (controle deslizante)
const Slider = styled.div`
  position: relative;
  width: 345px;  /* Largura do slider */
  height: 24px;  /* Altura do slider */
  background-color: #ddd;  /* Cor de fundo do slider */
  border-radius: 12px;  /* Bordas arredondadas */
  border: 1px solid white;  /* Borda branca */
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;  /* Cursor muda para indicar que é clicável */
`;

// Estilo para o "thumb" (controle deslizante) do slider
const SliderThumb = styled.div`
  position: absolute;
  width: 100px;  /* Largura do thumb */
  height: 20px;  /* Altura do thumb */
  background-color: #333;  /* Cor do thumb */
  border-radius: 10px;  /* Bordas arredondadas do thumb */
  transition: transform 0.3s ease-in-out;  /* Animação suave ao mover o thumb */
`;

// Estilo para os campos de seleção (select)
const Select = styled.select`
  width: 100%;  /* Largura total */
  padding: 5px;  /* Espaçamento interno */
  margin-bottom: 10px;  /* Margem inferior */
  border-radius: 4px;  /* Bordas arredondadas */
`;

// Estilo para o contêiner de filtros de data
const Datas = styled.div`
  margin-top: 10px;
`;

// Estilo para os rótulos de data e outros inputs
const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  display: block;
  margin-bottom: 5px;
`;

// Estilo para agrupar os campos de entrada (inputs)
const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

// Estilo para os contêineres individuais de cada campo de entrada
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

// Estilo para os campos de entrada (inputs)
const Input = styled.input`
  padding: 8px;
  width: 150px;  /* Largura do campo de entrada */
  border-radius: 4px;  /* Bordas arredondadas */
  border: 1px solid #ccc;  /* Borda do campo */
  margin-top: 5px;
`;

// Estilo para o botão de aplicar filtros
const AplicarButton = styled.button`
  margin-top: 10px;
  margin-left: 250px;  /* Alinha o botão à direita */
  width: 100px;  /* Largura do botão */
  padding: 8px;
  background-color: gray;  /* Cor de fundo do botão */
  color: white;  /* Cor do texto */
  border: none;
  border-radius: 4px;  /* Bordas arredondadas */
  cursor: pointer;  /* Cursor de ponteiro ao passar o mouse sobre o botão */
  font-weight: bold;
  &:hover {
    background-color: #388E3C;  /* Cor de fundo quando o mouse passa sobre o botão */
  }
`;
