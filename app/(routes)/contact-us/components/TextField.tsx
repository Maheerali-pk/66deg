import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface TextFieldProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  required?: boolean;
  rows?: number;
  as?: "input" | "textarea";
  className?: string;
}

const TextField = ({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  rows,
  as = "input",
  className,
}: TextFieldProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-base  text-text-primary/60 mb-2"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <Textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          className={className}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={className}
        />
      )}
    </div>
  );
};

export default TextField;
