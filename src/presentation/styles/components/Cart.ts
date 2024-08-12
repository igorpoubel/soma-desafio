import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Details = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Image = styled.Image`
  width: 100px;
  height: 140px;
`;

export const Name = styled.Text`
  font-size: 14px;
  margin-bottom: 15px;
`;
