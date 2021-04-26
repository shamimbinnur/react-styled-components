import styled from 'styled-components'

const Input = styled.input`
    padding: 5px 8px;
    font-family: 'Varela Round', sans-serif;
    border: 1.8px solid #dadada;
    border-radius: 8px;
    transition: .3s;
    margin: 5px;
    ::placeholder{
        font-size: .6rem;
    };
    :focus{
        outline: none;
        border: 1.8px solid ${  props => props.primary && "#01e458" || props.secondary && "#fb3640" || "#fffb1e"  };
        border-radius: 8px;
        transition: .3s;

    }
`


export { Input }