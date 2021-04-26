import './App.css';
import {Button, ButtonRound, ButtonOutlined, ExtendedButton, AnotherButton} from './styled-components/Button'
import { Input } from './styled-components/input'
import { Card } from './styled-components/cards'

const  App = ()=> {
  return (
    <div>

      <div>
        <div>
        <Button large > Large </Button>
        <Button medium > Medium </Button>
        <Button small > Small </Button>
        </div>

        <div>
        <ButtonRound large > Large </ButtonRound>
        <ButtonRound medium > Medium </ButtonRound>
        <ButtonRound small > Small </ButtonRound>
        </div>

        <div>
        <ButtonOutlined large> Large </ButtonOutlined>
        <ButtonOutlined medium> Medium </ButtonOutlined>
        <ButtonOutlined small> Small </ButtonOutlined>
        </div>

        <div>
          <ExtendedButton large > Large </ExtendedButton>
          <ExtendedButton medium > Medium </ExtendedButton>
          <ExtendedButton small > Small </ExtendedButton>
        </div>

        <div>
          <AnotherButton large > Large </AnotherButton>
          <AnotherButton medium > Medium </AnotherButton>
          <AnotherButton small > Small </AnotherButton>
        </div>
      </div>

      <div>
        <Input placeholder="regular" />
        <Input placeholder="primary" primary />
        <Input placeholder="secondary" secondary />
      </div>

      <div style={{maxWidth: "350px"}}>
        <Card>
          Boom!
          <br/>
          Hola!
          <br/>
          Hey!
        </Card>

        <Card>
          Boom!
          <br/>
          Hola!
          <br/>
          Hey!
        </Card>
      </div>

    </div>
  );
}
export default App;
