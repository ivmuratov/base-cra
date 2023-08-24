import { FC } from 'react';
import logo from '../../assets/icons/logo.svg';
import cls from './App.module.scss';

const App: FC = () => (
  <div className={cls.App}>
    <header className={cls['App-header']}>
      <img className={cls['App-logo']} src={logo} alt="logo" />
        <a
          className={cls['App-link']}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </header>
  </div>
);
 
export default App;
