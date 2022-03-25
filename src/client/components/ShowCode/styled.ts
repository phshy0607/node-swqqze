import styled from "styled-components";
import { MobileView } from "./types";

export const RenderWindow = styled.div<MobileView>`
  padding: 1em;
`;

export const ButtonContainer = styled.div<MobileView>`
  clear: both;
  overflow: auto;
  padding: 0 1em 1em 0;
  button {
    box-shadow: var(--box-shadow);
    border-radius: 4px;
    font-size: 0.875em;
    float: right;
    background: var(--c-white);
    color: var(--c-1);
    padding: 0.25em 0.5em;
    outline: 0;
    border: 0;

    cursor: pointer;
    transition: all 200ms linear;
    text-decoration: none;
    text-align: center;
    font-size: 0.5rem;
  }
`;

export const CodeWindow = styled.div<{ show: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
`;

export const ShowCodeContainer = styled.div<MobileView>`
  margin: 1rem 0;
  border: 1px solid var(--c-border);
  border-radius: 4px;

  ${CodeWindow} {
    display: ${(props) => props.mobileView && "block"};
    flex: ${(props) => props.mobileView && "1 1 auto"};
    overflow: ${(props) => props.mobileView && "auto"};

    pre {
      height: ${(props) => props.mobileView && "100%"};
      margin: ${(props) => props.mobileView && "0"};
      border-top-right-radius: ${(props) => props.mobileView && "0"};
      border-bottom-right-radius: ${(props) => props.mobileView && "0"};

      code {
        height: ${(props) => props.mobileView && "100%"};
      }
    }
  }

  ${RenderWindow} {
    flex: ${(props) => props.mobileView && "0 0 360px"};
    width: ${(props) => props.mobileView && "360px"};
    height: ${(props) => props.mobileView && "640px"};
    border-left: ${(props) => props.mobileView && "1px solid var(--c-border)"};
    padding: ${(props) => props.mobileView && "0"};
  }

  ${ButtonContainer} {
    display: ${(props) => props.mobileView && "none"};
  }

  display: ${(props) => (props.mobileView ? "flex" : "block")};
  flex-flow: ${(props) => props.mobileView && "row-reverse"};
`;
