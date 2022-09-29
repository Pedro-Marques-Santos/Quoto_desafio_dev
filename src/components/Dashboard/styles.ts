import styled from "styled-components";

export const Content = styled.div`
    width: 713px;
    border-left: 4px solid var(--borda);
    margin-bottom: 90px;

    div {
        font-size: 23px;
        width: 500px;
        margin-left: 99px;
    }
`;

interface ButtonProps {
    stateName: boolean;
}

export const Button = styled.div<ButtonProps>`
    display: ${ (props) => props.stateName ? 'none' : 'flex' };
    cursor: pointer;
    margin-left: 70px;
    width: 500px;
    height: 88px;
    transition: 0.3s;

    :hover {
        background: var(--fundo-button);
        color: var(--text-button);
        transition: 0.3s;
        h1 {
            display: block;
        }
    }

    align-items: center;
    justify-content: space-between;

    span {
        margin-left: 29px;

        div {
            margin-top: 5px;
        }

        .name {
            font-weight: 700;
        }

        .job {
            font-size: 10px;
            color: var(--carreira);
        }
    }

    h1 {
        color: var(--text-button);
        display: none;
        margin-left: 29px;
        margin-right: 29px;
    }
`;