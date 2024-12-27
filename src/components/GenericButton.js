import React from 'react';

const GenericButton = ({
  onClick,
  label,
  disabled = false,
  className = '',
  variant = 'primary', // default variant
  type = 'button',
}) => {
  // Define variants for styling
  const buttonVariants = {
    primary: 'text-primary-600 hover:bg-primary-500 hover:text-white border-2 border-primary-600',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600',
    success: 'bg-green-500 text-white hover:bg-green-400',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-400',
    danger: 'bg-red-500 text-white hover:bg-red-400',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`px-6 py-2 items-center flex font-bold rounded-3xl ${buttonVariants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {label}
    </button>
  );
};

export default GenericButton;
