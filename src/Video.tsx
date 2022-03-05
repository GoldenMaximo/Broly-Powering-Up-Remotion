import { Composition } from 'remotion';
import { BrolyComposition } from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="BrolyComposition"
				component={BrolyComposition}
				durationInFrames={120}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
