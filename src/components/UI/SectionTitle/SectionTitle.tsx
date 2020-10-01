import styled from 'styled-components';

const SectionTitle = styled.h2<{ align?: string }>`
  font-size: 1.7em;
  font-weight: 500;
  line-height: 1.3;
  text-align: ${props => props.align}
`;

SectionTitle.defaultProps = {
  align: 'unset',
};

export default SectionTitle;
