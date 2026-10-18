import './list.scss';

import type { ICard } from '../../../../common/interfaces/ICard.d';
import Card from '../Card/Card';

const List = ({ title, cards }: ListProps) => {
  const cardList = cards.map((card) => {
    return <Card key={card.id} title={card.title}></Card>;
  });
  return (
    <div className='list'>
      <h2 className='list-header'>{title}</h2>
      <div className='list-container'>{cardList}</div>
      <button type='button' className='add-list-btn'>+</button>
    </div>
  );
};

interface ListProps {
  title: string;
  cards: ICard[];
}

export default List;
