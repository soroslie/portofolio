import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  font-size: 24px;
  display: flex;

  .animate {
    padding-left: 0.5rem;
    transition: all 0.5s ease;
  }

  &:hover {
    cursor: pointer;

    .animate-to-right {
      transform: translate(5px, 0);
      transition: all 0.5s ease;
    }

    .animate-to-left {
      transform: translate(-5px, 0);
      transition: all 0.5s ease;
    }

    .animate-to-bot {
      transform: translate(0, 5px);
      transition: all 0.5s ease;
    }

    .animate-to-top {
      transform: translate(0, -5px);
      transition: all 0.5s ease;
    }
  }
`
