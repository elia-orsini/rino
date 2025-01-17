const RadioButton: React.FC<{ name: string; value: string }> = ({
  name,
  value,
}) => {
  return (
    <div className="flex flex-row gap-x-2">
      <input name={name} type="radio" id={value} value={value} />
      <label
        htmlFor={value}
        className="my-auto break-words text-xs leading-4 sm:text-sm"
      >
        {value}
      </label>
    </div>
  );
};

export default RadioButton;
