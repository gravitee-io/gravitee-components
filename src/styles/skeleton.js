import { css } from 'lit-element';

// language=CSS
export const skeleton = css`
  @keyframes skeleton-pulse {
    from {
      opacity: 0.85;
    }
    to {
      opacity: 0.45;
    }
  }
  .skeleton {
    animation-direction: alternate;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-name: skeleton-pulse;
    color: transparent;
    cursor: progress;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .skeleton svg {
      opacity: 0;
  }
`;
