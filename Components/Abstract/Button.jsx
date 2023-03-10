import React from "react";

const Button = ({
  position,
  width,
  height,
  children,
  onClick,
  className,
  type,
  fontSize,
  fontWeight,
  bg,
  brColor,
  icon,
  iconSize,
  brRadius,
  px,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        maxWidth: width,
        height: height,
        fontSize: fontSize,
        fontWeight: fontWeight,
        background: bg,
        border: brColor,
        position: position,
        borderRadius: brRadius,
      }}
      className={`${className} ${
        px === undefined ? "px-[20px]" : px
      } relative inline-flex shadow-inner hover:shadow-btnHover  text-white justify-center items-center w-full overflow-hidden bg-primary rounded-full transition-all duration-500 ease-in-out`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
