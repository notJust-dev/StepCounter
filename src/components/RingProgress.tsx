import { View } from 'react-native';
import SVG, { Circle } from 'react-native-svg';

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress: number;
};

const color = '#EE0F55';

const RingProgress = ({
  radius = 100,
  strokeWidth = 35,
  progress,
}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        alignSelf: 'center',
        // backgroundColor: 'green',
      }}
    >
      <SVG>
        {/* Background */}
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          // fill={'blue'}
          strokeWidth={strokeWidth}
          stroke={color}
          opacity={0.2}
        />
        {/* Foreground */}
        <Circle
          r={innerRadius}
          cx={radius}
          cy={radius}
          originX={radius}
          originY={radius}
          // fill={'blue'}
          strokeWidth={strokeWidth}
          stroke={color}
          strokeDasharray={[circumference * progress, circumference]}
          strokeLinecap="round"
          rotation="-90"
        />
      </SVG>
    </View>
  );
};

export default RingProgress;
