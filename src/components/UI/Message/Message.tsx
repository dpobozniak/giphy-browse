import styled from 'styled-components';

const Message = styled.p<{ type?: string }>`
  --color-success: hsl(163 91% 17%);
  --background-success: hsla(163 91% 36% / 0.2);
  --color-error: hsl(0 49% 44%);
  --background-error: hsla(0 49% 71% / 0.3);

  background: ${({ type }) => `var(--background-${type}) `};
  border-radius: 0.3em;
  color: ${({ type }) => `var(--color-${type}) `};
  padding: 1em;

  &__error {
    color: var(--color-error);
  }
`;

Message.defaultProps = {
  type: 'success',
};

export default Message;
