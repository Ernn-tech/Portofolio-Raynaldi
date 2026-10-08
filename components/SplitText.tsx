import { useSprings, animated } from '@react-spring/web';
import { useEffect, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function SplitText({
  text = '',
  className = '',
  delay = 100,
  duration = 600,
}: SplitTextProps) {
  const words = text.split(' ').map(word => word.split(''));
  const letters = words.flat();
  const [inView, setInView] = useState(true);

  const [springs] = useSprings(
    letters.length,
    index => ({
      from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
      to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
      delay: index * delay,
      config: { duration },
    }),
    [inView]
  );

return (
    <p className="inline-block overflow-hidden">
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={props}
          className={`inline-block transform-gpu ${className}`}
        >
          {letters[index] === ' ' ? '\u00A0' : letters[index]}
        </animated.span>
      ))}
    </p>
  );
}