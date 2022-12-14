import styled from "styled-components";

export const StyledCurrentCard = styled.div`
    display: grid;
    padding: 0.5em 0;
    background-color: rgba(0, 0, 0, 0.4);
    grid-template-columns: 1fr 1fr;
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
        justify-content: space-between;
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
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 0.5em;
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
