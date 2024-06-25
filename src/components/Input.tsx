function Input({
  className,
  text,
  id,
  type,
}: {
  className: string;
  text: string;
  id: string;
  type: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id}>{text}</label>
      <input type={type} id={id} />
    </div>
  );
}

export default Input;
