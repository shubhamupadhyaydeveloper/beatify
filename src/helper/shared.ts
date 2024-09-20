import Animated, {
  SharedTransition,
  withSpring,
  WithSpringConfig,
} from 'react-native-reanimated';

const SPRING_CONFIG: WithSpringConfig = {
  mass: 1,
  stiffness: 100,
  damping: 20, // Lowered damping for smoother oscillation
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
  velocity: 1, // Add velocity for a more natural spring movement
};

export const sharedElementTransition = SharedTransition.custom(values => {
  'worklet';
  return {
    height: withSpring(values.targetHeight, SPRING_CONFIG),
    width: withSpring(values.targetWidth, SPRING_CONFIG),
    originX: withSpring(values.targetGlobalOriginX, SPRING_CONFIG),
    originY: withSpring(values.targetGlobalOriginY, SPRING_CONFIG),
  };
});
