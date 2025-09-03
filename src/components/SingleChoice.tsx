interface SingleChoiceProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function SingleChoice({ text, isSelected, onClick }: SingleChoiceProps) {
  if (isSelected) {
    return (
      <div className="w-full max-w-[327px] md:max-w-none relative">
        {/* Gradient border wrapper */}
        <div className="bg-gradient-to-b from-[#B39FFE] to-[#725EBD] rounded-xl p-[1.5px]">
          <button
            onClick={onClick}
            className="w-full bg-white rounded-[10.5px] flex items-center gap-3 py-3 px-4 transition-all duration-200"
          >
            <span className="flex-1 text-left text-base leading-5 text-[#282828] font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              {text}
            </span>

            {/* Check icon */}
            <div className="w-5 h-5 flex items-center justify-center">
              <svg
                width="12.89"
                height="9.35"
                viewBox="0 0 12.89 9.35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.55 4.81L4.05 8.31L12.34 0.5"
                  stroke="url(#check-gradient)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="check-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#B39FFE" />
                    <stop offset="100%" stopColor="#725EBD" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className="w-full max-w-[327px] md:max-w-none flex items-center gap-3 py-3 px-4 rounded-xl bg-[#F9F9F9] hover:bg-gray-100 transition-all duration-200"
    >
      <span className="flex-1 text-left text-base leading-5 text-[#282828] font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>
        {text}
      </span>

      {/* Check icon placeholder - invisible */}
      <div className="w-5 h-5 opacity-0">
        <svg
          width="12.89"
          height="9.35"
          viewBox="0 0 12.89 9.35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.55 4.81L4.05 8.31L12.34 0.5"
            stroke="#B39FFE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </button>
  );
}
