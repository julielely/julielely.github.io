import { useState } from "react";

const MAGIC_8_BALL_RESPONSES = [
  "No cap, signs point to yes.",
  "Yes, absolutely",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Don't count on it",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

export function AboutPanel() {
  const [response, setResponse] = useState<string | null>("No cap, signs point to yes.");
  const [isShaking, setIsShaking] = useState(false);

  const handleShake = () => {
    setIsShaking(true);
    setResponse(null);

    setTimeout(() => {
      const randomResponse =
        MAGIC_8_BALL_RESPONSES[
          Math.floor(Math.random() * MAGIC_8_BALL_RESPONSES.length)
        ];
      setResponse(randomResponse);
      setIsShaking(false);
    }, 600);
  };

  return (
    <div className="relative w-full bg-bg-tertiary p-4">
      <div className="relative w-full min-h-[1100px] max-w-[1280px] mx-auto">
        {/* Purple Smiski Character - Top Left */}
        <div className="absolute left-[199px] top-[-10px] w-[170px] h-[139px]">
          <img
            src="/images/about/2164d7f2979586fc93ae744a7c0f6244b78b4219.png"
            alt="Purple Smiski character"
            className="w-full h-auto"
          />
        </div>

        {/* Kindle E-Reader - Left */}
        <div className="absolute left-[209px] top-[129px] w-[437px] h-[596px] bg-[#252525] rounded-xl px-6 pt-6 pb-[90px]">
          <div className="relative w-full h-full bg-white rounded-lg p-6 flex flex-col">
            {/* Chapter Header */}
            <div className="text-center mb-4">
              <p className="text-sm font-normal tracking-wide text-black uppercase font-serif">CHAPTER 1</p>
            </div>

            {/* Main Text Content */}
            <div className="flex-1 space-y-4 text-sm leading-[1.5] text-[#252525] font-serif">
              <p>
                I'm a Product Designer based in Portland, Oregon, with a background in Computer Science from Wellesley College. I design intuitive, thoughtful experiences and move fluidly between big-picture thinking and detailed execution.
              </p>
              <p>
                I'm a well-rounded designer who iterates quickly and validates ideas early through high-fidelity prototyping, bringing complex interactions and flows to life. With a strong foundation in design systems, I design at scale—balancing consistency, flexibility, and real-world product constraints.
              </p>
              <p>
                My path into design began during a Human-Computer Interaction course in college, where I discovered a passion for turning abstract ideas into tangible, usable experiences.
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[8px] text-black font-serif pt-3">
              <span>24 mins left in chapter</span>
              <span>19%</span>
            </div>
          </div>
        </div>

        {/* Magic 8 Ball - Top Right */}
        <div className="absolute left-[670px] top-[54.76px] w-[401.63px] h-[401.63px]">
          <button
            onClick={handleShake}
            disabled={isShaking}
            className={`relative w-full h-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:scale-105 disabled:hover:scale-100 ${isShaking ? 'animate-bounce' : ''}`}
            style={{ transform: 'rotate(13.328deg)' }}
            aria-label="Shake Magic 8 Ball"
          >
            <svg width="402" height="402" viewBox="0 0 402 402" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Gradient for sphere shading */}
                <radialGradient id="sphereGradient" cx="40%" cy="30%">
                  <stop offset="0%" stopColor="#2d2d2d" />
                  <stop offset="70%" stopColor="#1B1F24" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </radialGradient>

                {/* Pink glow filter */}
                <filter id="pinkGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Black sphere with shading */}
              <circle cx="201" cy="201" r="200" fill="url(#sphereGradient)" />

              {/* Subtle highlight on sphere */}
              <ellipse cx="240" cy="150" rx="60" ry="60" fill="white" opacity="0.08" />

              {/* Blue center window */}
              <circle cx="201" cy="201" r="88" fill="#1C2A44" />

              {/* Triangle for answer with clip path */}
              <g transform="translate(201, 201)">
                <defs>
                  <clipPath id="triangleClip">
                    <polygon points="0,-60 52,30 -52,30" />
                  </clipPath>
                </defs>

                <polygon points="0,-60 52,30 -52,30" fill="#3773DA" />

                {/* Answer text - clipped to triangle */}
                {response && (
                  <text
                    x="0"
                    y="-15"
                    textAnchor="middle"
                    fill="white"
                    fontSize="7.5"
                    fontWeight="700"
                    className="uppercase"
                    clipPath="url(#triangleClip)"
                  >
                    {response.split(' ').map((word, i) => (
                      <tspan key={i} x="0" dy={i === 0 ? 0 : "9"}>
                        {word}
                      </tspan>
                    ))}
                  </text>
                )}
              </g>

              {/* Pink glowing star decoration */}
              <g filter="url(#pinkGlow)">
                <path
                  d="M 27 -42 L 30 -34 L 38 -34 L 32 -29 L 34 -21 L 27 -26 L 20 -21 L 22 -29 L 16 -34 L 24 -34 Z"
                  fill="#DE96FF"
                  opacity="0.9"
                />
              </g>
            </svg>
          </button>
        </div>

        {/* Portland Sticker - Center */}
        <div
          className="absolute left-[553px] top-[680px] w-[172px] h-[99px]"
          style={{ transform: 'rotate(-11.706deg)' }}
        >
          <img
            src="/images/about/5dadb9bd17d6ff3454cd8710f789be42290951c9.svg"
            alt="Portland colorful text"
            className="w-full h-full"
          />
        </div>

        {/* Polaroid Photo - Bottom Right */}
        <div
          className="absolute left-[794px] top-[482px] w-[411px] h-[443px]"
          style={{ transform: 'rotate(12.774deg)' }}
        >
          <div className="relative w-full h-full bg-white rounded-lg border-2 border-stroke-primary shadow-xl p-6">
            {/* Photo placeholder - purple for now since actual photo wasn't in assets */}
            <div className="w-full h-full bg-[#DE96FF] rounded"></div>
          </div>
        </div>

        {/* Camera - Bottom Left */}
        <div className="absolute left-[181px] top-[760.61px] w-[437px] h-[276px]">
          <img
            src="/images/about/cd45911be640658fe9d3fe9b135d5bac7fe14d02.png"
            alt="Ricoh camera"
            className="w-full h-full object-cover"
          />
          {/* Camera screen overlay */}
          <div className="absolute left-[33px] top-[73px] w-[272px] h-[172px]">
            <img
              src="/images/about/39bdfd5063c8bb4df49e6755568b62426df603e3.png"
              alt="Camera screen landscape"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
