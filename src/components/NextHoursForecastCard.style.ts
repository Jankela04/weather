import styled from "styled-components";

export const StyledForecastCard = styled.div`
    margin: 1em 0.5em;
    border: 1px solid black;
    overflow: auto;
    padding: 0.5em;

    & > span {
        position: fixed;
    }

    .forecast-cards-container {
        padding-top: 2em;
        display: flex;
        gap: 0.5em;
        .card {
            padding: 0.5em;
            outline: 1px solid black;
            display: flex;
            flex-direction: column;
            align-items: center;
            svg {
                width: 30px;
            }
            .chance {
                display: flex;
                align-items: center;
            }
        }
    }
`;
