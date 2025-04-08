import React, { useState } from 'react';
import styled from 'styled-components';

const FiltroGrafico: React.FC = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const estados1 = ['Focos', 'Área de Calor', 'Riscos'];
  const cores1 = ['#4CAF50', '#FF9800', '#D32F2F'];
  const estados2 = ['Estados', 'Biomas'];
  const cores2 = ['#2196F3', '#9C27B0'];

  const atualizarEstado1 = () => (
    <Slider1 style={{ backgroundColor: cores1[index1] }}>
      <SliderThumb1 style={{ transform: `translateX(${index1 * 122}px)` }} />
    </Slider1>
  );

  const atualizarEstado2 = () => (
    <Slider2 style={{ backgroundColor: cores2[index2] }}>
      <SliderThumb2 style={{ transform: `translateX(${index2 * 75}px)` }} />
    </Slider2>
  );

  return (
    <FiltroContainer>
      <Filtros>
        {/* Rótulos do primeiro slider */}
        <ToggleLabels1>
          <span>{estados1[0]}</span>
          <span>{estados1[1]}</span>
          <span>{estados1[2]}</span>
        </ToggleLabels1>

        {/* Primeiro Slider */}
        <SliderContainer onClick={() => setIndex1((index1 + 1) % estados1.length)}>
          {atualizarEstado1()}
        </SliderContainer>

        {/* Rótulos do segundo slider */}
        <ToggleLabels2>
          <span>{estados2[0]}</span>
          <span>{estados2[1]}</span>
        </ToggleLabels2>

        {/* Segundo Slider */}
        <SliderContainer onClick={() => setIndex2((index2 + 1) % estados2.length)}>
          {atualizarEstado2()}
        </SliderContainer>

        <Datas>
          <Label>Datas:</Label>
          <InputGroup>
            <InputContainer>
              <Label htmlFor="inicio">Início</Label>
              <Input type="date" id="inicio" name="inicio" min="2025-03-20" max="2025-03-27" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="fim">Fim</Label>
              <Input type="date" id="fim" name="fim" min="2025-03-20" max="2025-03-27" />
            </InputContainer>
          </InputGroup>
        </Datas>

        <AplicarButton>Aplicar</AplicarButton>
      </Filtros>
    </FiltroContainer>
  );
};

export default FiltroGrafico;

// Estilizações

const FiltroContainer = styled.div`
  font-weight: bold;
  padding: 20px;
  background-color: #d32f2f;
  height: 100vh;
  width: 350px;
  border-top-right-radius: 8px;
`;

const Filtros = styled.div`
  padding: 10px 0;
`;

const ToggleLabels1 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  span {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
`;

const ToggleLabels2 = styled.div`
  display: flex;
  justify-content: center;  /* Alinha os itens ao centro */
  gap: 60px;

  span {

    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
`;


const SliderContainer = styled.div`
  margin: 10px 0;
`;

const Slider1 = styled.div`
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

const Slider2 = styled.div`
  position: relative;
  width: 150px;
  height: 24px;
  background-color: #ddd;
  border-radius: 12px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  padding: 2px;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
`;

const SliderThumb1 = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  background-color: #333;
  border-radius: 10px;
`;

const SliderThumb2 = styled.div`
  position: absolute;
  width: 75px;
  height: 20px;
  background-color: #333;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
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
