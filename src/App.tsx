import { Suspense } from 'react';
import './App.css';
import { Box } from 'components/box';

export const App = () => {
  return (
    <div className='App'>
      <h1>Vite + React</h1>
      <div className='card'></div>
      <Suspense fallback='Test'>
        <Box />
        <a href='https://google.com'>This is atest link</a>
        <button>This is a test button</button>
      </Suspense>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
