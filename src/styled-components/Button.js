import styled from 'styled-components'

const Button = styled.button`
    background-color: #8ac1ff ;
    border: 2.5px solid #ffffff;
    font-family: 'Varela Round', sans-serif;
    color: #1a1a1a;
    border-radius: 10px;
    padding: 4px 8px;
    margin: 3px;
    font-size: ${ props => props.small && "10px" || props.medium && "15px" || props.large &&  "18px" || "12px"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        background-color: #56a5ff;
        transition: 0.2s ease-in-out;
    };
`;

const ButtonRound = styled.button`
    background-color: #ffdf2d ;
    border: 2.5px solid #ffffff;
    font-family: 'Varela Round', sans-serif;
    color: #424242;
    border-radius: 20px;
    padding: 4px 8px;
    margin: 3px;
    font-size: ${ props => props.small && "10px" || props.medium && "15px" || props.large &&  "18px" || "12px"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        background-color: #e9cc29;
        transition: 0.2s ease-in-out
    };
`;

const ButtonOutlined = styled.button`
    border: 2.5px solid #ffffff;
    background: none;
    font-family: 'Varela Round', sans-serif;
    color: #1a1a1a;
    border-radius: 20px;
    padding: 4px 8px;
    margin: 3px;
    font-size: ${ props => props.small && "10px" || props.medium && "15px" || props.large &&  "18px" || "12px"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        background-color: #f1f8ff;
        transition: 0.2s ease-in-out
    };
`;

const ExtendedButton = styled(Button)`
    color: #1d1d1d;
`;

const AnotherButton = props => <ButtonRound {...props} children={props.children+"**"} />


export { Button, ButtonRound, ButtonOutlined, ExtendedButton, AnotherButton };