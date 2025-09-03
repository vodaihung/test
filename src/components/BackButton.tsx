interface BackButtonProps {
  onClick: () => void;
  className?: string;
  isWhite?: boolean;
}

export default function BackButton({ onClick, className = "", isWhite = false }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200 ${
        isWhite ? 'hover:bg-white/10' : 'hover:bg-gray-100'
      } ${className}`}
      aria-label="Go back to previous step"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke={isWhite ? "#FFFFFF" : "#282828"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
