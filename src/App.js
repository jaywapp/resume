import './App.css';
import { Title } from './components/common/title/title';
import { Introduce } from './components/common/introduce/introduce';
import { Experiences } from './components/common/experience/experience';
import { Skill } from './components/common/skill/skill';
import styled from 'styled-components';

function App() {
  let Tag = styled.div`
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    margin-bottom: 200px;
  `

  let Body = styled.div`
    grid-column: 2;
  `

  let lang = 'eg';

  return (
    <Tag>
      <Body>
        <Title lang={lang} />
        <Introduce lang={lang} />
        <Experiences lang={lang}/>
        <Skill />
      </Body>
    </Tag>
  );
}

export default App;