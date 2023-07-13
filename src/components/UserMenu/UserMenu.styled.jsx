import styled from '@emotion/styled';

export const UserWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const UserText = styled.p`
  font-weight: 500;
  color: black;
`;

export const UserSpan = styled.span`
  font-weight: 500;
  color: #3015a8;
`;

export const UserBtn = styled.button`
  padding: 8px;
  overflow: hidden;
  border-radius: 4px;

  box-shadow: ${props => props.theme.shadows.medium};

  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.accent};
  font-weight: 600;

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
    color: white;
    background-color: #3015a8;
  }
`;
