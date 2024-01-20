import { Text } from "@react-three/drei";
import { useState } from 'react';
import { a, useSpring } from '@react-spring/three';

export default function OverlayText() {


    const [scale, setScale] = useState([1, 1, 1]);
    
    const growShrink = () => {
        if (scale == [1, 1, 1]) {
            setScale([1.2, 1.2, 1.2]);
            console.log('hit');
        } else {
            console.log('hit');
            setScale([1, 1, 1]);
        }
    }

    return (
        <>
        <Text
            position={[-50, 1500, 2500]}
            font = {'fonts/JuliusSansOne-Regular.ttf'}
            color="#b99b4c"
            fontSize={150}
            lineHeight={1}
            rotation={[0, Math.PI, 0]}
            letterSpacing={0.02}
            textAlign="center"
            scale={scale}
            onClick = {console.log('hi!')}
        >
            FRANCIS YANG{"\n"}WEB DEVELOPER
        </Text>
        </>
    );
  };