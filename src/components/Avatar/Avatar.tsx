import React from 'react';
import styled from '../../theme';
import {colors} from '../../styles';

interface AvatarProps {
  image: string;
  imageWidth?: number;
  onPress?: () => void;
  active?: boolean;
}

const Wrapper = styled.TouchableOpacity<{active?: boolean; width: number}>`
  ${props => {
    return `
    height: ${props.width}px;
    width: ${props.width}px;
    border-radius: ${props.width / 2}px;
    justify-content: center;
    align-items: center;
    ${
      props.active &&
      `
      border-color: ${colors.aqua}; 
      border-width: 5px;`
    }
  `;
  }}
`;

const ImageWrapper = styled.View<{width: number}>`
  ${props => {
    return `
    height: ${props.width}px;
    width: ${props.width}px;
    border-radius: ${props.width / 2}px;
  `;
  }}
`;

const Image = styled.Image<{radius: number}>`
  width: 100%;
  height: 100%;
  border-radius: ${props => props.radius}px;
`;

export const Avatar = ({image, onPress, active, imageWidth}: AvatarProps) => {
  // Default width is 75px, maximum is 150px, minimum width is 50px;
  const width =
    imageWidth && imageWidth <= 150 && imageWidth >= 50 ? imageWidth : 75;

  return (
    <React.Fragment>
      {image && (
        <Wrapper
          testID="avatar"
          active={active}
          width={width + 5}
          onPress={() => {
            onPress && onPress();
          }}>
          <ImageWrapper width={width}>
            <Image source={{uri: image}} radius={width / 2} />
          </ImageWrapper>
        </Wrapper>
      )}
    </React.Fragment>
  );
};
