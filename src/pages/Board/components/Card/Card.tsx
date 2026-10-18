import './card.scss';

interface CardProps {
  title: string;
}

const Card = ({ title }: CardProps) => {
  return <div className='card'>{title}</div>;
};

export default Card;
