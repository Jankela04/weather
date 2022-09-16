import styled from "styled-components";

export const StyledCurrentCard = styled.div`
    display: grid;
    padding: 0.5em 0;
    border: 1px solid black;
    grid-template-columns: 0.8fr 1fr;
    margin-inline: 0.5em;
    .date-time {
        margin-top: 1em;
        text-align: center;
        .date {
            display: block;
            font-weight: 600;
            margin-bottom: 0.5em;
        }
        .time {
            font-size: 1.5rem;
            letter-spacing: 0.05em;
        }
    }

    .temp-condition {
        display: flex;
        .temp {
            display: flex;
            align-items: flex-start;
            font-size: 4.2rem;
            span {
                display: block;
                font-size: 0.4em;
            }
        }
        .condition {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
    .minmax-wind {
        grid-column: 1/3;
        text-align: center;
        span {
            display: block;
        }
    }
`;
