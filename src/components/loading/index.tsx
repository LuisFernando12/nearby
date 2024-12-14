import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../styles/colors';
import { style } from './style';

const Loading: React.FC = () => {  
  return(
    <ActivityIndicator color={colors.green.base} style={style.container}/>
  );
}

export default Loading;