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
