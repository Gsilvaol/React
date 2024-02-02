import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';
export function App() {
  return (
    <div>
      <Header />
      
      <Post author="Gustavo" content="Vamos a luta"/>
      <Post author="Rafael" content="Eu também estou muito animado" />
    </div>
  )
}


