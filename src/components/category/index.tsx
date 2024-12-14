import React from "react";
import { Text, Pressable, PressableProps } from "react-native";
import { styles } from "./style";
import { categoriesIcons } from "../../utils/categories-icons";
import { colors } from "../../styles/theme";

type CategoryProps = PressableProps & {
  iconId: string;
  isSelected?: boolean;
  name: string;
};

const Category: React.FC<CategoryProps> = ({
  name,
  iconId,
  isSelected = false,
  ...rest
}) => {
  const Icon = categoriesIcons[iconId];
  return (
    <Pressable style={[styles.container, isSelected && styles.containerSelected]} {...rest}>
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text style={[styles.name, isSelected && styles.nameSelected]}>{name}</Text>
    </Pressable>
  );
};

export default Category;
