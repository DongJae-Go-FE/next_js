const Button = ({ children, color }: { children: string; color: string }) => {
  return <button style={{ backgroundColor: color }}>{children}</button>;
};

export default Button;
