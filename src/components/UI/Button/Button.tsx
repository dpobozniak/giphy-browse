import styled, { css } from 'styled-components';

const Button = styled.button<{ full?: boolean, $kind?: string }>`
  background: none;
  border: 1px solid #d2d6dc;
  border-radius: 0.2em;
  color: inherit;
  font-size: 90%;
  padding: 1em 2em;
  text-decoration: none;

  &:disabled {
    opacity: 0.7;
  }

  ${props => props.$kind === 'primary' && css`
    border: 0 none;
    background: var(--color-primary);
    color: #fff;
  `}
  
  ${props => props.full && 'width: 100%' }
`;

Button.defaultProps = {
  type: 'button',
};

export default Button;
