type TextInputProps = {
  type: string;
  placeholder: string;
};

export default function TextInput({
  type,
  placeholder,
  ...rest
}: TextInputProps) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-slate-400 rounded-sm input-sm  w-50 m-2"
        {...rest}
      />
    </div>
  );
}
