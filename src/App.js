import './App.css';
import {Button, ButtonRound, ButtonOutlined} from './styled-components/Button'

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

    </div>
  );
}

export default App;
