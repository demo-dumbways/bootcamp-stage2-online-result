interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ onClick, label }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
