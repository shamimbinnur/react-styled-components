import './App.css';
import {Button, ButtonRound, ButtonOutlined, ExtendedButton, AnotherButton} from './styled-components/Button'

const  App = ()=> {
  return (
    <div>
      <div>
      <Button small > Button </Button>
      <Button medium > Button </Button>
      <Button large > Button </Button>
      </div>

      <div>
      <ButtonRound small > ButtonRound </ButtonRound>
      <ButtonRound medium > ButtonRound </ButtonRound>
      <ButtonRound large > ButtonRound </ButtonRound>
      </div>

      <div>
      <ButtonOutlined small> ButtonOutlined </ButtonOutlined>
      <ButtonOutlined medium> ButtonOutlined </ButtonOutlined>
      <ButtonOutlined large> ButtonOutlined </ButtonOutlined>
      </div>

      <div>
        <ExtendedButton small >ExtendedButton</ExtendedButton>
        <ExtendedButton medium >ExtendedButton</ExtendedButton>
        <ExtendedButton large >ExtendedButton</ExtendedButton>
      </div>

      <div>
        <AnotherButton small >AnotherButton</AnotherButton>
        <AnotherButton medium >AnotherButton</AnotherButton>
        <AnotherButton large >AnotherButton</AnotherButton>
      </div>
    </div>
  );
}

export default App;
