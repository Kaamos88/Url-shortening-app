const Icons = ({ id, ...props }) => {
  return (
    <svg {...props}>
      <use href={`/assets/sprite.svg#${id}`} />
    </svg>
  );
};

export default Icons;
