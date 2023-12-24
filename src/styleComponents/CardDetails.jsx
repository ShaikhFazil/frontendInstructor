export default function TextFields(param) {
  return (
    <div className={`flex flex-col justify-start items-start gap-3 ${param.class}`}>
      <div className="text-zinc-300 text-sm font-medium">
        {param.title}
        {param.required && <span className="text-red-500 ml-1">*</span>}
      </div>
      <input
        className="inline-flex gap-2 px-4 py-2.5 bg-gray-100 text-black rounded-md justify-start items-center w-full"
        type={param.type}
        placeholder={param.placeholder}
        value={param.value}
        onChange={param.onChange}
        name={param.name}
      />
    </div>
  );
}
