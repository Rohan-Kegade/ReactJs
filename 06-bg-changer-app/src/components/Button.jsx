function Button({ color, handleColorChange }) {
  return (
    <button
      className="w-20 m-2 rounded p-2 text-white"
      style={{ backgroundColor: color }}
      onClick={() => handleColorChange(color)}
    >
      {color}
    </button>
  );
}

export default Button;
