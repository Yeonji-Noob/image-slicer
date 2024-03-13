import styled from "@emotion/styled";

type SpacerProps = {
  axis: 'horizontal' | 'vertical';
  size: number;
}

function getWidth({ axis, size }: SpacerProps) {
  return axis === 'vertical' ? `${size}px` : `1px`;
}

function getHeight({ axis, size }: SpacerProps) {
  return axis === 'horizontal' ? `${size}px` : `100%`;
}

const Spacer = styled.span<SpacerProps>`
display: block;
width: ${(props) => getWidth(props)};
min-width: ${(props) => getWidth(props)};
height: ${(props) => getHeight(props)};
min-height: ${(props) => getHeight(props)};
`

export default Spacer;