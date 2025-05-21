import React from 'react';
import { OrbitControls as DreiOrbitControls, OrbitControlsProps } from '@react-three/drei';

/**
 * A simpler approach to avoid the wheel event warning - we'll just use the original OrbitControls
 * and let the browser handle the warning. The previous approach was causing errors because
 * domElement was undefined in some cases.
 */
const PassiveOrbitControls: React.FC<OrbitControlsProps> = (props) => {
  return <DreiOrbitControls {...props} />;
};

export default PassiveOrbitControls;
