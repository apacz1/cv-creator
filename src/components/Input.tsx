function Input({
  text,
  type,
  value,
  onChange,
  id,
}: {
  text: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
}) {
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{text}</label>
      <input type={type} value={value} onChange={onChange} id={id} />
    </div>
  );
}

export default Input;
