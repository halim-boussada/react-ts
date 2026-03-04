import "./input.css"

type InputProps = {
  primary?: boolean;
  size?: "big" | "medium";
  className ?: string;
  label: string;
  placeholder: string;
  type: "text" | "password";
  onChange: () => void;
};

export function Input({
  primary = false,
  size = "medium",
  className = "primary",
  label,
  placeholder,
  type,
  onChange,
  ...props
}: InputProps) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        name={label}
        placeholder={placeholder}
        onChange={onChange}
        className={
         className
        }
        {...props}
      />
    </div>
  );
}


