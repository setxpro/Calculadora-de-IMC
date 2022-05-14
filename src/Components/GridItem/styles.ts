import styled from 'styled-components';

export const Container = styled.div<{mode:string}>`
    background: ${props => props.mode};

    flex: 1;
    color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`;


export const GridAreaIcon = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: rgba( 0, 0, 0, .1);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
    }
`;
export const GridAreaTitle = styled.div`
    font-size: 23px;
    font-weight: bold;
    margin-top: 5px;
`;
export const GridAreaInfo = styled.div`
    font-size: 12px;
    margin-top: 14px;
`;