import {Center, Text, HStack, TextProps, CenterProps} from '@chakra-ui/react';
import styles from './text-updown.module.css';

interface TextUpdownProps extends CenterProps {
  textArray?: string[];
  textProps?: TextProps;
}

const TextUpdown = ({
  textArray = ['DEBES', 'INGRESAR', 'TEXTO'],
  textProps,
  ...containerProps
}: TextUpdownProps) => {
  return (
    // <Center boxSize="full" overflo >
    <Center {...containerProps}>
      {textArray.map((t, i) => (
        <Text
          key={i}
          pos="absolute"
          textAlign="center"
          {...textProps}
          className={styles[`animatedText${i + 1}`]}
        >
          {t}
        </Text>
      ))}
    </Center>
  );
};

export default TextUpdown;
