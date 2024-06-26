function Input({ text, id, type }: { text: string; id: string; type: string }) {
  return (
    <div className="inputContainer">
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} />
    </div>
  );
}

export default Input;
