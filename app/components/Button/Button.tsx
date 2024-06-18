'use client';

const Button = ({ children, onClick, type }: { type?:"button"|"submit"; children: string; onClick?: ()=> void }) => {
  return <button type={type} className="button Pretendard" onClick={onClick}>{children}</button>;
};

export default Button;
