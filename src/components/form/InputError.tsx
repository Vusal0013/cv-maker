import React from "react";

const InputError: React.FC<{ children: string }> = ({ children }) => {
  return (
    <div className="w-full h-min text-red-800 text-sm mt-1">{children}</div>
  );
};

export { InputError };
