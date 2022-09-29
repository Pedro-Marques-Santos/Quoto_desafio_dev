import styled from "styled-components";

export const Container = styled.div`
    height: 220px;
    max-width: 1332px;
    margin: 0 auto;
`;

export const Random = styled.div`
    cursor: pointer;
    display: flex;
    margin-left: 1247px;
    font-size: 12px;
    line-height: 22px;
    color: var(--text);

    div {
        margin-top: 31px;
        margin-right: 11px;
    }
`;

interface NameProps {
    stateName: boolean
}

export const Name = styled.div<NameProps>`
    display: ${ (props) => props.stateName ? 'block' : 'none' };
    margin-top: 30px;
    margin-left: 416px;
    font-size: 28px;
    font-weight: 700;
    transition: 2s;
`;

export const Icon = styled.div`
    font-size: 20px;
    color: var(--text);
`;