import { useState, useEffect } from "react";

const HOROSCOPE_MESSAGES = [
  "today is your day to shine",
  "good vibes incoming",
  "trust your creative instincts",
  "something exciting is brewing",
  "the stars say: take a break",
  "luck is on your side today",
];

// Seattle, WA coordinates
const SEATTLE_LAT = 47.6062;
const SEATTLE_LON = -122.3321;

interface WeatherData {
  temperature: number;
  weatherCode: number;
}

// Weather codes from Open-Meteo: https://open-meteo.com/en/docs
function getWeatherIcon(code: number) {
  // Clear sky
  if (code === 0) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" fill="#FFD93D" />
        <path
          d="M12 2V4M12 20V22M4 12H2M22 12H20M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M5.64 18.36L4.22 19.78M19.78 4.22L18.36 5.64"
          stroke="#FFD93D"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  // Partly cloudy
  if (code >= 1 && code <= 3) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="4" fill="#FFD93D" />
        <path
          d="M8 2V3M8 13V14M2 8H3M13 8H14M3.76 3.76L4.47 4.47M11.53 11.53L12.24 12.24M3.76 12.24L4.47 11.53M11.53 4.47L12.24 3.76"
          stroke="#FFD93D"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M19 18H8C5.79 18 4 16.21 4 14C4 11.79 5.79 10 8 10C8.34 10 8.67 10.04 9 10.11C9.59 8.28 11.3 7 13.33 7C15.95 7 18.07 9.04 18.23 11.62C19.87 12.17 21 13.71 21 15.5C21 17.71 19.21 18 19 18Z"
          fill="#B0C4DE"
          stroke="#94A3B8"
          strokeWidth="1"
        />
      </svg>
    );
  }
  // Fog
  if (code >= 45 && code <= 48) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 8H21M5 12H19M7 16H17" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  // Rain/Drizzle
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 18H7C4.79 18 3 16.21 3 14C3 11.79 4.79 10 7 10C7.34 10 7.67 10.04 8 10.11C8.59 8.28 10.3 7 12.33 7C14.95 7 17.07 9.04 17.23 11.62C18.87 12.17 20 13.71 20 15.5C20 17.43 18.57 18 16 18Z"
          fill="#B0C4DE"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <path d="M8 20L7 22M12 20L11 22M16 20L15 22" stroke="#3773DA" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  // Snow
  if (code >= 71 && code <= 77) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 14H7C4.79 14 3 12.21 3 10C3 7.79 4.79 6 7 6C7.34 6 7.67 6.04 8 6.11C8.59 4.28 10.3 3 12.33 3C14.95 3 17.07 5.04 17.23 7.62C18.87 8.17 20 9.71 20 11.5C20 13.43 18.57 14 16 14Z"
          fill="#E2E8F0"
          stroke="#94A3B8"
          strokeWidth="1"
        />
        <circle cx="8" cy="18" r="1" fill="#94A3B8" />
        <circle cx="12" cy="20" r="1" fill="#94A3B8" />
        <circle cx="16" cy="18" r="1" fill="#94A3B8" />
      </svg>
    );
  }
  // Thunderstorm
  if (code >= 95) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M16 14H7C4.79 14 3 12.21 3 10C3 7.79 4.79 6 7 6C7.34 6 7.67 6.04 8 6.11C8.59 4.28 10.3 3 12.33 3C14.95 3 17.07 5.04 17.23 7.62C18.87 8.17 20 9.71 20 11.5C20 13.43 18.57 14 16 14Z"
          fill="#64748B"
          stroke="#475569"
          strokeWidth="1"
        />
        <path d="M13 14L10 18H14L11 22" stroke="#FFD93D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // Default cloudy
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M19 18H8C5.79 18 4 16.21 4 14C4 11.79 5.79 10 8 10C8.34 10 8.67 10.04 9 10.11C9.59 8.28 11.3 7 13.33 7C15.95 7 18.07 9.04 18.23 11.62C19.87 12.17 21 13.71 21 15.5C21 17.71 19.21 18 19 18Z"
        fill="#B0C4DE"
        stroke="#94A3B8"
        strokeWidth="1"
      />
    </svg>
  );
}

export function StatusTicker() {
  const [horoscopeIndex] = useState(() =>
    Math.floor(Math.random() * HOROSCOPE_MESSAGES.length)
  );
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Fetch weather data
  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${SEATTLE_LAT}&longitude=${SEATTLE_LON}&current=temperature_2m,weather_code&temperature_unit=fahrenheit`
        );
        const data = await response.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
        });
      } catch (error) {
        console.error("Failed to fetch weather:", error);
      }
    }
    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex items-center gap-4 text-xs font-medium text-content-secondary">
      {/* Weather */}
      <div className="flex items-center gap-1.5">
        {weather ? (
          <>
            {getWeatherIcon(weather.weatherCode)}
            <span>{weather.temperature}°F Seattle</span>
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="5" fill="#FFD93D" />
              <path
                d="M12 2V4M12 20V22M4 12H2M22 12H20M5.64 5.64L4.22 4.22M19.78 19.78L18.36 18.36M5.64 18.36L4.22 19.78M19.78 4.22L18.36 5.64"
                stroke="#FFD93D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>-- °F Seattle</span>
          </>
        )}
      </div>

      <div className="w-px h-3 bg-stroke-primary" />

      {/* Horoscope */}
      <div className="flex items-center gap-1.5">
        <svg
          width="20"
          height="20"
          viewBox="0 0 76.2537 76.2537"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin-slow"
        >
          <circle cx="38.1267" cy="38.1268" r="28.5" fill="#DE96FF" />
          <ellipse cx="34.7749" cy="32.0073" rx="2.01176" ry="5.02941" transform="rotate(26.0771 34.7749 32.0073)" fill="#1B1F24" />
          <ellipse cx="45.0147" cy="37.0185" rx="2.01176" ry="5.02941" transform="rotate(26.0771 45.0147 37.0185)" fill="#1B1F24" />
          <path d="M23.2945 37.1606C24.5523 45.0332 31.2608 58.4762 48.0328 49.2676" stroke="#1B1F24" strokeWidth="1.34118" />
          <path d="M48.4957 45.8147C47.771 47.5042 47.2091 50.9498 50.7588 51.2151" stroke="#1B1F24" strokeWidth="1.34118" />
        </svg>
        <span>{HOROSCOPE_MESSAGES[horoscopeIndex]}</span>
      </div>

      <div className="w-px h-3 bg-stroke-primary" />

      {/* Now Playing */}
      <a
        href="https://open.spotify.com/track/2xGGpmywtvPY3h7JkcwP1E?si=99b29c0546c14bbe"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-content-primary transition-colors"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18V5l12-2v13"
            stroke="#60BB8E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="6" cy="18" r="3" fill="#60BB8E" />
          <circle cx="18" cy="16" r="3" fill="#60BB8E" />
        </svg>
        <span>listening to Deep Green</span>
      </a>

      <div className="w-px h-3 bg-stroke-primary" />

      {/* Contact */}
      <a
        href="https://www.linkedin.com/in/julielely/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 hover:text-content-primary transition-colors"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.47 2H3.53C2.69 2 2 2.69 2 3.53V20.47C2 21.31 2.69 22 3.53 22H20.47C21.31 22 22 21.31 22 20.47V3.53C22 2.69 21.31 2 20.47 2ZM8.09 18.74H5.07V9.35H8.09V18.74ZM6.59 8.07C5.62 8.07 4.83 7.28 4.83 6.3C4.83 5.33 5.62 4.54 6.59 4.54C7.56 4.54 8.35 5.33 8.35 6.3C8.35 7.28 7.56 8.07 6.59 8.07ZM18.91 18.74H15.89V14.02C15.89 12.62 15.25 12.07 14.39 12.07C13.47 12.07 12.63 12.79 12.63 14.06V18.74H9.61V9.35H12.5V10.71C12.8 10.08 13.85 9.07 15.35 9.07C17.02 9.07 18.91 10.14 18.91 13.19V18.74Z"
            fill="#3773DA"
          />
        </svg>
        <span>let's connect</span>
      </a>
    </div>
  );
}