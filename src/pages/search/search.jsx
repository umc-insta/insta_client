import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 10% 3% 10%;
    align-items: center;
    border: 1px solid black;
`;

const Input = styled.input`
    width: 90%;
    border: none;

    &:focus{ 	
        border: none;
        outline: none;
        }
`;

function Search() {
    return (
        <Div>
            <img src="./icons/magnifying.png" style={{width: "5vw", height:"5wh", marginRight:"2%"}}/>
            <Input placeholder="검색"></Input>
        </Div>
    )
}

export default Search;