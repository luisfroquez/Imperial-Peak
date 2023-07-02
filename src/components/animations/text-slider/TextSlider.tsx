import {Center, Text, HStack, TextProps, CenterProps} from '@chakra-ui/react';
import styles from './text-slider.module.css';

interface TextSliderProps extends CenterProps {
  textArray?: string[];
  textProps?: TextProps;
}

const TextSlider = ({
  textArray = ['DEBES', 'INGRESAR', 'TEXTO'],
  textProps,
  ...containerProps
}: TextSliderProps) => {
  return (
    // <Center boxSize="full" overflo >
    <HStack
      w="100%"
      maxWidth="100%"
      h="100%"
      overflow="hidden"
      pos="relative"
      {...containerProps}
    >
      <HStack
        className={styles.animate}
        w="200%"
        pos="absolute"
        left={0}
        spacing={4}
      >
        {textArray.map((t, i) => (
          <Text key={i} {...textProps}>
            {t}
          </Text>
        ))}

        {textArray.map((t, i) => (
          <Text key={i} {...textProps}>
            {t}
          </Text>
        ))}
      </HStack>
    </HStack>
    // </Center>
  );
};

export default TextSlider;
