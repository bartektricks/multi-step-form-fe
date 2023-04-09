import { type ReactElement, useState } from 'react';
import reactLogo from '@assets/react.svg';
import styled from 'styled-components';

const Title = styled.div`
  background: red;
`;

function App(): ReactElement {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <Title>Vite + React</Title>
      <div className='card'>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
