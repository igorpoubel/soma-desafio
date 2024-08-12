import styled from "styled-components/native";

export const PageWrapper = styled.SafeAreaView`
  flex: 1;
  padding-bottom: 50px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
  padding: 20px 16px;
`;

export const Button = styled.Pressable`
  margin-top: 10px;
  background-color: #333333;
  padding: 10px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
`;
