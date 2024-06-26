type Props = {
  onClick: () => void;
};

const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="addBtn" onClick={onClick}>
      +
    </button>
  );
};

export default AddButton;
