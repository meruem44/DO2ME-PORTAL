import styled, { css } from 'styled-components';
import { colors, metrics } from '../../styles';

interface PropsContainer {
    active: boolean;
};

export const Container = styled.button<PropsContainer>`
    width: 100%;
    border-width: 1px;
    border-radius: 20px;
    border-style: solid;
    padding: 10px;
    height: 30px;
    border-color: ${colors.light};
    background-color: #fff;
    transition: background-color 500ms;
    display: flex;
    align-items: center;

    &:hover {
        background-color: ${colors.light};
    }

    ${({ active }) => active && css`
        background-color: ${colors.specialContrast};
    `}

    p {
        font-size: ${metrics.small}px;
        color: ${colors.base};
        text-align: start;
    }
`;
