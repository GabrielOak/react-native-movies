import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' }
})`
  flex: 1;
  padding: 8px;
`;

export const HeaderContainer = styled.View`
  padding: 8px;
  align-self: flex-start;
`;

export const Title = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 26px;
`;
