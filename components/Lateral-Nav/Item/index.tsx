interface ItemProps {
  title: string;
  children?: React.ReactNode;
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <li className='flex items-center'>
      <span className='text-lg text-light-primary font-bold'>
        {props.title}
      </span>
      {children}
    </li>
  );
};

export default Item;
