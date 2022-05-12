import React, { FC } from "react";

const Button: FC<{ color: string }> = ({ children, color }) => (
  <div style={{ color }}>{children}</div>
);

export default Button;
