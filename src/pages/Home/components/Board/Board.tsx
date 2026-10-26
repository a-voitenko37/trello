export const Board = ({ id, title, custom }: BoardProps) => {
  return (
    <div key={id} style={custom}>
      <h3>{title}</h3>
    </div>
  );
};

interface BoardProps {
  id: number;
  title: string;
  custom: {};
}
