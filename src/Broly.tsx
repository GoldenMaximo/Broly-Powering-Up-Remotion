import { Img } from 'remotion';

export const Broly: React.FC = () => {
	return (
		<div
			style={{
				flex: 1,
				width: '100%',
				height: '100%',
			}}
		>
			<Img
				src={require('./assets/broly.jpg')}
				style={{
					width: '100%',
					height: '100%',
				}}
			/>
		</div>
	);
};
