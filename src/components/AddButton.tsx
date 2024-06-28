import PlusBox from "../assets/plus-box.svg?react";

type Props = {
  onClick: () => void;
};

const AddButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="addBtn" onClick={onClick}>
      <PlusBox />
    </button>
  );
};

export default AddButton;
