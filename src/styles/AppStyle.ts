import styled from 'styled-components';
import { LevelImc } from '../types/imc';

export const Container = styled.div`
  
`;
export const Header = styled.header`
  
`;

export const HeaderContainer = styled.div`
    max-width: 900px;
    margin: 40px auto;
`;


export const Content = styled.div`
    display: flex;
    max-width: 900px;
    margin: auto;
`;
export const ContentLeftSide = styled.div<{btnDisabled: LevelImc | null}>`
    flex: 1;
    margin-right: 40px;

    h1 {
        margin: 0;
        font-size: 40px;
        color: #3A4B5C;
    }

    p {
        font-size: 1rem;
        margin-bottom: 40px;
        color: #6A7D8B;
    }

    input {
        width: 100%;
        border: 0;
        outline: none;
        border-bottom: 2px solid rgba(150, 163, 171, .5);

        padding: 10px 2px;
        margin-bottom: 20px;
        font-size: 14px;
    }

    button {
        background: #227C9D;
        color: #fff;
        font-size: 15px;
        border: 0;
        border-radius: 10px;
        padding: 15px 0;
        width: 100%;

        opacity: ${props => props.btnDisabled === null ? '1' : '.7'};

        cursor: pointer;
        margin-top: 40px;

        transition: all .5s ease;
        &:hover {
            opacity: .7;
        }
    }
`;




export const ContentRightSide = styled.div`
    flex: 1;
    margin-left: 40px;

    display: flex;
`;
export const GridRightSide = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const ContentRightSideBig = styled.div`
    flex: 1;
    display: flex;

`;
export const ContentArrowLeftIcon = styled.div`
    position: absolute;
    background: #227C9D;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: -35px;
    margin-top: 145px;

    transition: all 1s ease;

    &:hover {
        opacity: .8;
    }
`;
