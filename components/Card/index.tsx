import React from 'react';
import { View, Text, Platform, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Divider from '../Divider'

export type CardProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  title?: string
  titleStyle?: StyleProp<TextStyle>;
  showDriver?: boolean;
  children?: React.ReactNode;
};

const Card = ({
  children,
  containerStyle,
  wrapperStyle,
  title,
  titleStyle,
  showDriver = false,
  ...attributes
}: CardProps) => {

  const CardTitle = (
    <Text
      testID="cardTitle"
      style={StyleSheet.flatten([styles.title, titleStyle]) as TextStyle}>
      {title}
    </Text>
  )

  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        styles.container,
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {title && CardTitle}
        {
          showDriver && <Divider style={StyleSheet.flatten([styles.divider])} />
        }
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 15,
    margin: 15,
    marginBottom: 0,
    borderColor: '#F5F5F5',
    ...Platform.select({
      android: {
        elevation: 1,
      },
      default: {
        shadowColor: '#D3D3D3',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  title: {
    fontSize: 14,
    color: '#808080',
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
      },
      default: {
        fontWeight: 'bold',
      },
    }),
    textAlign: 'center',
    marginBottom: 15,
  },
  divider: {
    marginBottom: 15,
  },
  wrapper: {
    backgroundColor: 'transparent',
  },
});

export default Card