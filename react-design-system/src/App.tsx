import { Fragment } from 'react';
import './styles/global.css';

export function App() {
  return (
    <Fragment>
      <h1 className="font-bold text-2xl text-purple">Hello World</h1>
      <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300'>Enviar</button>
    </Fragment>
  );
}
