import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { styles } from "./style";
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "../../styles/colors";

export type PlaceProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
};

type Props = TouchableOpacityProps & {
  data: PlaceProps;
};

const Place: React.FC<Props> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image style={styles.image} source={{ uri: data.cover }} />
      <View style={styles.content}>
        <Text style={styles.name}>
            {data.name}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
            {data.description}
        </Text>
        <View style={styles.footer}>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={styles.tickets}>{data.coupons} cupons disponiceis</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Place;
