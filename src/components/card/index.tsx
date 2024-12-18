import React from "react";
import { Text, View, ViewProps } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./style";
import { categoriesIcons } from "../../utils/categories-icons";
import { IconPhone, IconPin, IconTicket } from "@tabler/icons-react-native";

// import { Container } from './styles';
type Props = {
  name?: string;
  description?: string;
  coupons?: number;
  address?: string;
  phone?: string;
  categoryId?: string;
};
const Card: React.FC<Props> = ({
  name,
  coupons,
  address,
  phone,
  categoryId,
}) => {
  const Icon = categoriesIcons[categoryId!];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={styles.headerTitle}
        >
          <Text style={styles.titleHeader}>{name}</Text>
          <Icon color={colors.green.light} />
        </View>
        <View style={styles.coupons}>
            <IconTicket color={colors.red.base} size={22} />
            <Text style={styles.couponsText}>{coupons}</Text>            
        </View>
      </View>
      <View style={styles.content}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <IconPin color={colors.gray[500]} size={15} />
          <Text style={styles.text}>{address}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <IconPhone color={colors.gray[500]} size={15} />
          <Text style={styles.text}>{phone}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;
