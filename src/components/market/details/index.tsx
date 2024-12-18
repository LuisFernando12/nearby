import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import Info from "../info";
import { IconMapPin, IconPhone, IconTicket } from "@tabler/icons-react-native";
import { colors } from "../../../styles/theme";

export type PropsDetails = {
  name: string;
  address: string;
  description: string;
  phone: string;
  coupons: number;
  rules: {
    description: string;
    id: string;
  }[];
};
type Props = {
  data: PropsDetails;
};

const Details: React.FC<Props> = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.description}>{data.description}</Text>
      <View style={styles.couponsBox}>
        <IconTicket size={20} color={colors.red.base} />
        <Text style={styles.couponsTotal}>{data.coupons}</Text>
        <Text
          style={styles.couponsText}
        >{`cupons disponíveis`}</Text>
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Informações</Text>
        <Info description={data.address} icon={IconMapPin} />
        <Info description={data.phone} icon={IconPhone} />
      </View>
      <View style={styles.group}>
        <Text style={styles.title}>Regulamento</Text>
        {data.rules.map((item) => (
          <Text key={item.id} style={styles.rule}>
            {`\u2022 ${item.description}`}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Details;
