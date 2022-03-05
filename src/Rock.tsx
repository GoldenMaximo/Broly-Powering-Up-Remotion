import {
	Img,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';

export const Rock: React.FC<{ delay: number; x: string; size: number }> = ({
	delay,
	x,
	size,
}) => {
	const { fps } = useVideoConfig();
	const frame = useCurrentFrame();

	const drop = spring({
		fps,
		frame: frame - delay,
		config: {
			damping: 1000,
		},
	});

	const bottom = interpolate(drop, [0, 1], [1.1, -0.2]);

	return (
		<Img
			src={require('./assets/rock.png')}
			style={{
				width: 100,
				position: 'absolute',
				left: x,
				top: bottom * 100 + '%',
				transform: `scale(${size})`,
			}}
		/>
	);
};
