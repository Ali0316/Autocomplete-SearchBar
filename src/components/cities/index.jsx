import React from "react";
import styled from "styled-components";

const ResultContainer = styled.div`
  min-height: 2em;
  display: flex;
  border-bottom: 2px solid #d8d8d852;
  padding: 2px 8px;
  align-items: center;
`;

const CityName = styled.h3`
  font-size: 15px;
  color: #000;
  margin-left: 10px;
  flex: 2;
  display: flex;
`;


export function City({name}) {
  return (
    <ResultContainer>
      <CityName>{name}</CityName>
    </ResultContainer>
  );
}
