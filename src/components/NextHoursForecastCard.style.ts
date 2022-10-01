import styled from "styled-components";

export const StyledForecastCard = styled.div`
    margin: 1em 0.5em;
    background-color: rgba(0, 0, 0, 0.4);
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
            display: flex;
            flex-direction: column;
            align-items: center;
            svg {
                width: 30px;
                fill: white;
            }
            .chance {
                display: flex;
                align-items: center;
            }
        }
    }
`;
