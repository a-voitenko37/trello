import { useState } from 'react';
import { Board } from './components/Board/Board';

export const Home = () => {
  const [list] = useState([
    { id: 1, title: 'покупки', custom: { background: 'red' } },
    { id: 2, title: 'підготовка до весілля', custom: { background: 'green' } },
    { id: 3, title: 'розробка інтернет-магазину', custom: { background: 'blue' } },
    { id: 4, title: 'курс по просуванню у соцмережах', custom: { background: 'grey' } },
  ]);

  const boards = list.map((elem) => {
    return <Board id={elem.id} title={elem.title} custom={elem.custom}></Board>;
  });

  return <>{boards}</>;
};
