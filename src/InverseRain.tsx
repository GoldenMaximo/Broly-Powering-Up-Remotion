import React, { useMemo } from 'react';
import { Rock } from './Rock';
import { random, AbsoluteFill } from 'remotion';

export const InverseRain: React.FC = () => {
	const rocks = useMemo(() => {
		return new Array(300).fill(true).map((_, i) => {
			const x = random('x' + i) * 100 + '%';
			const delay = random('delay' + i) * 60;
			const size = random('size' + i) + 0.3;
			return { x, delay, size };
		});
	}, []);

	return (
		<AbsoluteFill>
			{rocks.map((rock) => {
				return <Rock x={rock.x} delay={rock.delay} size={rock.size} />;
			})}
		</AbsoluteFill>
	);
};
