import React from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "./style";
import { Button } from "../../button";
import { router } from "expo-router";
import { IconArrowLeft } from "@tabler/icons-react-native";

type Props = {
  uri: string;
};
const Cover: React.FC<Props> = ({ uri }) => {
  return (
    <ImageBackground source={{ uri }} style={styles.container}>
      <View style={styles.header}>
        <Button style={{ width: 40, height: 40 }} onPress={() => router.back()}>
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Cover;
