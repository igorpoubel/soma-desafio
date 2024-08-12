import styled from "styled-components/native";

export const Menu = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 15px;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  margin: 0 20px;
  border-radius: 30px;
`;

export const Tab = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: relative;
`;

export const TabLabel = styled.Text`
  color: ${(props) => (props.theme.isFocused ? "#000" : "#878787")};
  position: relative;
`;

export const Count = styled.View`
  position: absolute;
  background-color: #333333;
  border-radius: 100px;
  width: 14px;
  height: 14px;
  top: 8px;
  right: 55px;
  margin-left: 5px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CountText = styled.Text`
  color: #fff;
  font-size: 10px;
`;
