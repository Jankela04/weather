import styled from "styled-components";

export const Form = styled.div`
    width: 95vw;
    background-color: rgba(0, 0, 0, 0.4);
    height: 4em;
    margin: 1em auto;
    display: flex;
    & > * {
        margin: 0.5em;
    }
    input {
        padding: 0.1em;
        width: 100%;
        font-size: 1.5em;
        background-color: white;
        color: black;
    }
    button {
        background-color: rgba(0, 0, 0, 0.5);
        font-size: 1.2rem;
        color: white;
    }
`;
