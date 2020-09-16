import styled, { css } from 'styled-components';

import { colors, metrics } from '../../styles';

interface PropsContainer {
    active?: boolean | false;
}

export const Container = styled.div`
    height: 30px;
    width: 100%;
`;

export const Header = styled.header<PropsContainer>`
    width: 100%;
    background-color: ${colors.light};
    height: 34px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 10px 15px;;
    justify-content: space-between;

    p {
        color: #fff;
        font-size: ${metrics.medium}px;
    }

    button {
        background-color:transparent;
        display: flex;
        align-items: center;
    }

    ${({ active }) => active && css`
        background-color: ${colors.base};
    `}
`;

