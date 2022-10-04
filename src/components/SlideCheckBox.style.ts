import styled from "styled-components";

export const StyledCheckbox = styled.label`
    --width: 80px;
    --height: calc(var(--width) / 2);
    --border-radius: calc(var(--height) / 2);

    margin-left: 0.5em;

    display: inline-block;
    cursor: pointer;

    div {
        position: relative;
        width: var(--width);
        height: var(--height);
        border-radius: var(--border-radius);
        background-color: #808080;
        transition: background 0.2s;
        transition: translate 1s, content 1s;

        &::after {
            display: flex;
            align-items: center;
            justify-content: center;
            content: "F";
            color: black;
            font-size: 1.5rem;
            position: absolute;
            top: 0;
            left: 0;
            height: var(--height);
            width: var(--height);
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
            border-radius: var(--border-radius);
            transition: 0.4s;
        }
    }
    input {
        display: none;

        &:checked ~ div::after {
            content: "C";
            translate: var(--height);
            transition: 0.4s;
        }
    }
`;
