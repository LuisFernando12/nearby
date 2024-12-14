import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { api } from "../service/api";
import { Button } from "../components/button";
import Categories, { CategoriesProps } from "../components/categories";
import { PlaceProps } from "../components/place";
import Places from "../components/places";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { colors, fontFamily } from "../styles/theme";
import { router } from "expo-router";
type MarketsProps = PlaceProps & {
  latitude: number;
  longitude: number;
};
const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};

// type LocationProps = {
//   latitude: number;
//   longitude: number;
// };

const Home: React.FC = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCategory] = useState<string>("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);
  // const [currentLocation, setCurrentLocation] = useState<LocationProps>();
  const getCategories = async () => {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategory(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possivel carregar as categorias");
    }
  };
  const getMarkets = async () => {
    try {
      if (!category) {
        return;
      }
      const { data } = await api.get(`/markets/category/${category}`);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Markets", "Não foi possivel carregar os locais");
    }
  };

  const getCurrentLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();

      if (granted) {
        const location = await Location.getCurrentPositionAsync();
        const { latitude, longitude } = location.coords;
        // setCurrentLocation({
        //   latitude,
        //   longitude,
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
    getCurrentLocation();
  }, []);

  useEffect(() => {
    getMarkets();
  }, [category]);

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        data={categories}
        onSelect={setCategory}
        selected={category}
      />
      <MapView
        style={{
          flex: 1,
        }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("../assets/location.png")}
        />
        {markets.map((item) => (
          <Marker
            key={item.id}
            identifier={item.id}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
            image={require("../assets/pin.png")}
          >
            <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    color: colors.gray[600],
                    fontFamily: fontFamily.medium,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                  }}
                >
                  {item.address}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Places data={markets} />
    </View>
  );
};

export default Home;
