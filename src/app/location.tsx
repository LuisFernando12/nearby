import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { colors } from "../styles/colors";
import Loading from "../components/loading";
import Card from "../components/card";
import { IconArrowLeft } from "@tabler/icons-react-native";
import { Button } from "../components/button";

type MarketProps = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
  categoryId: string;
};
const Location: React.FC = () => {
  const { market } = useLocalSearchParams<{ market: string }>();

  const [marketObj, setMarketObj] = useState<MarketProps>();
  useEffect(() => {
    setMarketObj(JSON.parse(market));
  }, [market]);
  const isIOS = Platform.OS === "ios";

  if (!marketObj) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {isIOS && <StatusBar barStyle="dark-content" />}

      <Button
        style={{
          backgroundColor: colors.green.base,
          width: 40,
          height: 40,
          position: "absolute",
          top: 60,
          left: 30,
          zIndex: 70,
        }}
        onPress={() => router.back()}
      >
        <Button.Icon icon={IconArrowLeft} />
      </Button>
      <MapView
        style={{
          justifyContent: "center",
          flexDirection: "row",
          flex: 1,
        }}
        initialRegion={{
          latitude: marketObj.latitude || 0,
          longitude: marketObj.longitude || 0,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        minZoomLevel={19}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: marketObj.latitude,
            longitude: marketObj.longitude,
          }}
          image={require("../assets/pin.png")}
        />
      </MapView>

      <Card {...marketObj} />
    </View>
  );
};

export default Location;
