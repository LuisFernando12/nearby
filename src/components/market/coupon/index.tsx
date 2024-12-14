import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../../styles/colors';
import { styles } from './style';
import { IconTicket } from '@tabler/icons-react-native';

type Props = {
    code: string
}

const Coupon: React.FC<Props> = ({code}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Utlize esse cupom</Text>
        <View style={styles.content}>
            <IconTicket color={colors.green.light} size={24}/>
            <Text style={styles.code}>{code}</Text>
        </View>
    </View>
  );
}

export default Coupon;