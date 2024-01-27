import {Platform} from 'react-native';
import styled from '../theme';

export const colors = {
  primary: '#16102A',
  secondary: '#221D34',
  alternate: '#B66CFF',
  aqua: '#5CD3CD',
  pink: '#FCA1E6',
  white: '#fff',
  black: '#000',
};

export const Container = styled.SafeAreaView<{background?: string}>`
  background-color: ${props =>
    props.background ? props.background : colors.primary};
  flex: 1;
  ${Platform.OS === 'android' && 'padding: 20px 0px;'}
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SpacedRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.View``;

export const Heading = styled.Text`
  color: ${colors.primary};
  text-align: center;
  font-size: 32px;
  font-weight: 700;
`;

export const TouchWrapper = styled.TouchableOpacity``;

export const PlusButton = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  position: absolute;
  bottom: 8px;
  right: 20px;
`;

export const NormalText = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: black;
`;
