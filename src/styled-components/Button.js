import styled from 'styled-components'

const Button = styled.button`
    background-color: #8ac1ff ;
    border: 1px solid #aa9f9f;
    font-family: 'ubuntu';
    color: #1a1a1a;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    font-size: ${ props => props.small && "10px" || props.medium && "15px" || props.large &&  "25px"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        background-color: #56a5ff;
        transition: 0.2s ease-in-out
    };
`;

const ButtonRound = styled.button`
    background-color: #ff8c2d ;
    border: 1px solid #bdb3b3;
    font-family: 'ubuntu';
    color: #1a1a1a;
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
    font-size: ${ props => props.small && "10px" || props.medium && "15px" || props.large &&  "25px"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        background-color: #fa8220;
        transition: 0.2s ease-in-out
    };
`;

const ButtonOutlined = styled.button`
    border: 1px solid #9b9b9b;
    background: none;
    font-family: 'ubuntu';
    color: #1a1a1a;
    border-radius: 20px;
    padding: 10px;
    margin: 5px;
    font-size: ${ props => props.small && "10px" || props.medium && "15px" || props.large &&  "25px"};
    cursor: pointer;
    transition: 0.2s ease-in-out;
    :hover{
        background-color: #f1f8ff;
        transition: 0.2s ease-in-out
    };
`;

const ExtendedButton = styled(Button)`
    color: #ec4300;
`;

const AnotherButton = props => <ButtonRound {...props} children={props.children+"**"} />


export { Button, ButtonRound, ButtonOutlined, ExtendedButton, AnotherButton };