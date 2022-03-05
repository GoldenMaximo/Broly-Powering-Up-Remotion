import { useCurrentFrame, useVideoConfig } from 'remotion';
import { Broly } from './Broly';
import { InverseRain } from './InverseRain';

export const BrolyComposition = () => {
	const { durationInFrames } = useVideoConfig();

	const frame = useCurrentFrame();
	const opacity = durationInFrames - frame;

	return (
		<div
			style={{
				flex: 1,
				background: 'white',
			}}
		>
			<div
				style={{
					flex: 1,
					textAlign: 'center',
					fontSize: '7em',
					opacity: `${opacity}%`,
				}}
			>
				<Broly />
				<InverseRain />
			</div>
		</div>
	);
};
