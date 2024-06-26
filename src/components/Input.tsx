function Input({ text, type }: { text: string; type: string }) {
  return (
    <div className="inputContainer">
      <label>{text}</label>
      <input type={type} />
    </div>
  );
}

export default Input;
