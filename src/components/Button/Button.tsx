import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import styled from '../../theme';
import {colors} from '../../styles';

export type ButtonStyle = 'primary' | 'alternate';
export type ButtonSize = 'default' | 'small';
export type ButtonState = 'default' | 'disabled';

interface ButtonProps {
  size?: ButtonSize;
  buttonStyle?: ButtonStyle;
  buttonState?: ButtonState;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isLoading?: boolean;
  testID?: string;
  label?: string;
}

interface LabelProps extends ButtonProps {}

const Label = styled.Text<LabelProps>`
  ${(props: LabelProps) => {
    return `
      text-align: center;
      font-weight: 700;
      color: ${
        props.buttonStyle === 'alternate' ? colors.primary : colors.white
      };
      font-size: ${props.size === 'small' ? 14 : 16}px;
    `;
  }}
`;

const CustomButton = styled.Pressable<ButtonProps>`
  ${(props: ButtonProps) => {
    return `
    border-radius: 5px;
    background: ${
      props.buttonState === 'disabled' && props.buttonStyle === 'primary'
        ? colors.primary
        : props.buttonStyle === 'alternate'
        ? colors.white
        : colors.primary
    };
    height: ${props.size === 'small' ? 40 : 60}px;
    justify-content: center;
    ${
      props.buttonStyle === 'alternate' &&
      `border: 1px solid ${colors.primary};`
    };
    `;
  }}
`;

export const Button = ({
  size = 'default',
  style,
  onPress,
  isLoading,
  buttonState = 'default',
  testID,
  label,
  buttonStyle = 'primary',
}: ButtonProps) => {
  return (
    <CustomButton
      testID={testID}
      size={size}
      style={style}
      buttonStyle={buttonStyle}
      buttonState={buttonState}
      onPress={(event: GestureResponderEvent) => {
        buttonState !== 'disabled' && onPress && onPress(event);
      }}>
      {isLoading ? (
        <ActivityIndicator
          color={buttonStyle === 'alternate' ? colors.black : colors.white}
        />
      ) : (
        <React.Fragment>
          <Label buttonStyle={buttonStyle} size={size}>
            {label}
          </Label>
        </React.Fragment>
      )}
    </CustomButton>
  );
};
