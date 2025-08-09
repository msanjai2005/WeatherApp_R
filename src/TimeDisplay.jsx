import { useState, useEffect } from 'react';

const TimeDisplay = ({ format = '12h', showSeconds = true}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = currentTime.getHours();
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    let ampm = '';

    if (format === '12h') {
      ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
    }

    return `${hours}:${minutes}${showSeconds ? `:${seconds}` : ''} ${ampm}`;
  };

  return (
    <div className="time-display">
      <div className="time">{formatTime()}</div>
    </div>
  );
};

export default TimeDisplay;