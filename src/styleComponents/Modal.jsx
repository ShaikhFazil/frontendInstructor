

const TextModal = ({ title, type, placeholder, required, value, onChange }) => {
  return (
    <div className={`flex flex-col justify-start items-start gap-3`}>
      <div className="text-zinc-300 text-sm font-medium">
        {title}
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>
      {type === "file" ? (
        <input
          type={type}
          name={title.toLowerCase()}
          accept="image/*"
          onChange={onChange}
          className="mt-1 p-2 w-full border rounded-md"
          required={required}
        />
      ) : (
        <input
          type={type}
          name={title.toLowerCase()}
          value={value}
          placeholder={placeholder}
          onChange={onChange} // Updated this line
          className="mt-1 p-2 w-full text-black border rounded-md"
          required={required}
        />
      )}
    </div>
  );
};

export default TextModal;
