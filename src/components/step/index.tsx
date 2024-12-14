import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { style } from "./style";
import { IconProps } from "@tabler/icons-react-native";
type StepProps = {
    icon?: React.ComponentType<IconProps>,
    title: string,
    description: string,
}
const Step: React.FC<StepProps> = ({title, description, icon:Icon}) => {
  return (
    <View style={style.container}>
        {Icon && <Icon size={32} color={"red"}/>}
      <View style={style.details}>
        <Text style={style.title}>{title}</Text>
        <Text style={style.description}>{description}</Text>
      </View>
    </View>
  );
};

export default Step;
