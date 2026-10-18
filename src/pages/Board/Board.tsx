import { useState } from 'react';
import './board.scss';
import List from './components/List/List';

export const Board = () => {
  const [title] = useState('Моя тестова дошка');
  const [list] = useState([
    {
      id: 1,
      title: 'Плани',
      cards: [
        { id: 1, title: 'помити кота' },
        { id: 2, title: 'приготувати суп' },
        { id: 3, title: 'сходити в магазин' },
      ],
    },
    {
      id: 2,
      title: 'В процесі',
      cards: [{ id: 4, title: 'подивитися серіал' }],
    },
    {
      id: 3,
      title: 'Зроблено',
      cards: [
        { id: 5, title: 'зробити домашку' },
        { id: 6, title: 'погуляти з собакой' },
      ],
    },
  ]);
  const itemList = list.map((elem) => {
    return <List key={elem.id} title={elem.title} cards={elem.cards} />;
  });
  return (
    <div className='board'>
      <h1>{title}</h1>
      <div className='board-body'>{itemList}</div>

      <button type='button' className='add-board-btn'>Створити список</button>
    </div>
  );
};
