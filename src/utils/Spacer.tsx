import styled from "@emotion/styled";

type SpacerProps = {
  axis: 'horizontal' | 'vertical';
  size: number;
}

function getSize({ axis, size }: SpacerProps) {
  return axis === 'vertical' ? `1px` : `${size}px`;
}

const Spacer = styled.span<SpacerProps>`
display: block;
width: ${(props) => getSize(props)};
min-width: ${(props) => getSize(props)};
height: ${(props) => getSize(props)};
min-height: ${(props) => getSize(props)};
`

export default Spacer;