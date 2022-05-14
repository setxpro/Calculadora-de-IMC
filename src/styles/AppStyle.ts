import styled from 'styled-components';
import { LevelImc } from '../types/imc';

export const Container = styled.div`
  
  @media (max-width: 770px) {
    padding: 0 20px;
  }
`;
export const Header = styled.header`
  @media (max-width: 770px) {
      padding: 0 20px;
  }
`;

export const HeaderContainer = styled.div`
    max-width: 900px;
    margin: 40px auto;
`;


export const Content = styled.div`
    display: flex;
    max-width: 900px;
    margin: auto;

    @media (max-width: 770px) {
        flex-direction: column;
  }
`;
export const ContentLeftSide = styled.div<{btnDisabled: LevelImc | null}>`
    flex: 1;
    margin-right: 40px;

    @media (max-width: 770px) {
        margin-right: 0;
    }

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

    @media (max-width: 770px) {
        margin-left: 0;
        margin-top: 50px;
    }

    display: flex;
`;
export const GridRightSide = styled.div`
  flex: 1;
  display: grid;

  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

    @media (max-width: 770px) {
        margin-bottom: 1.5rem;
    }
`;

export const ContentRightSideBig = styled.div`
    flex: 1;
    display: flex;

    @media (max-width: 770px) {
        margin-bottom: 1rem;
    }
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

    
    @media (max-width: 770px) {
        margin-top: -25px;
        margin-left: 35px;
        transform: rotate(90deg);
    }

    &:hover {
        opacity: .8;
    }
`;
