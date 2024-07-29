const Button = ({
  onClick = () => {},
  children,
  model = 'outline',
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={` transition-all py-3 px-5 rounded-lg ${!disabled ? 'cursor-pointer' : 'cursor-not-allowed'}
        ${model === 'outline' && `border border-accent/90 text-accent/90 ${!disabled && ' hover:border-accent hover:text-accent hover:bg-accent/5 active:bg-accent/10'} disabled:text-gray-500 disabled:cursor-not-allowed disabled:border-gray-500`}
        ${model === 'primary' && ` bg-accent/90 text-dark-primary ${!disabled && 'hover:bg-accent'} disabled:bg-gray-500`}
        ${model === 'glass' && ` bg-accent/5 text-accent ${!disabled && 'hover:bg-accent/10'}  disabled:text-gray-500`}
        ${model === 'danger' && ` bg-red-300/5 text-red-300 ${!disabled && 'hover:bg-red-300/10'}  disabled:text-gray-500`}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
