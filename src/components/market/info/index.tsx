import React from "react";
import { Text, View } from "react-native";

import { colors } from "../../../styles/theme";
import { IconProps } from "@tabler/icons-react-native";
import { styles } from "./style";

type Props = {
  description: string;
  icon: React.ComponentType<IconProps>;
};

const Info: React.FC<Props> = ({ description, icon: Icon }) => {
  return (
    <View style={styles.container}>
      <Icon color={colors.gray[400]} size={16} />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
};

export default Info;
