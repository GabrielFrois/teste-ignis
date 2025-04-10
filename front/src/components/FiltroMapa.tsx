import React, { useState } from 'react';
import styled from 'styled-components';

// Componente principal
const FiltroMapa: React.FC = () => {
  const [index, setIndex] = useState(0); // controla o estado atual do botão deslizante

  const estados = ['Focos', 'Área de Calor', 'Riscos']; // nomes das camadas de visualização
  const cores = ['#4CAF50', '#FF9800', '#D32F2F']; // cores correspondentes a cada camada

  // Gera o slider com cor de fundo e posição do thumb conforme o estado atual
  const atualizarEstado = () => {
    return (
      <Slider style={{ backgroundColor: cores[index] }}>
        <SliderThumb style={{ transform: `translateX(${index * 122}px)` }} />
      </Slider>
    );
  };

  return (
    <FiltroContainer>
      <Filtros>
        {/* Rótulos acima do slider */}
        <ToggleLabels>
          <span>Focos</span>
          <span>Área de Calor</span>
          <span>Riscos</span>
        </ToggleLabels>

        {/* Slider clicável que alterna o índice */}
        <SliderContainer onClick={() => setIndex((index + 1) % estados.length)}>
          {atualizarEstado()}
        </SliderContainer>

        {/* Dropdown de estados */}
        <label htmlFor="estado">Estados</label>
        <Select id="estado" name="estado">
          <option value="">Selecione um estado</option>
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

        {/* Dropdown de biomas */}
        <label htmlFor="bioma">Biomas</label>
        <Select id="bioma" name="bioma">
          <option value="">Selecione um bioma</option>
          <option value="amazonia">Amazônia</option>
          <option value="caatinga">Caatinga</option>
          <option value="cerrado">Cerrado</option>
          <option value="mata-atlantica">Mata Atlântica</option>
          <option value="pantanal">Pantanal</option>
          <option value="pampa">Pampa</option>
        </Select>

        {/* Filtro por intervalo de datas */}
        <Datas>
          <Label>Datas:</Label>
          <InputGroup>
            <InputContainer>
              <Label htmlFor="inicio">Início</Label>
              <Input type="date" id="inicio" name="inicio" min="2025-03-20" max="2025-03-27"/>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="fim">Fim</Label>
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

export default FiltroMapa;

// Estilos com styled-components

const FiltroContainer = styled.div`
  font-weight: bold;  
  padding: 20px;
  background-color: #d32f2f;
  height: 83vh;
  width: 350px;
  border-radius: 0px 8px 8px 8px;
  z-index: 1;
  margin-top: 2%;
  position: fixed;
`;

const Filtros = styled.div`
  padding: 10px 0;
`;

const ToggleLabels = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SliderContainer = styled.div`
  margin: 10px 0;
`;

const Slider = styled.div`
  position: relative;
  width: 345px;
  height: 24px;
  background-color: #ddd;
  border-radius: 12px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
`;

const SliderThumb = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: #333;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
`;

const Select = styled.select`
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
  border-radius: 4px;
`;

const Datas = styled.div`
  margin-top: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  display: block;
  margin-bottom: 5px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`;

const Input = styled.input`
  padding: 8px;
  width: 150px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 5px;
`;

const AplicarButton = styled.button`
  margin-top: 10px;
  margin-left: 250px;
  width: 100px;
  padding: 8px;
  background-color: gray;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #388E3C;
  }
`;
