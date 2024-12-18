import { Redirect, router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Alert, Modal, StatusBar, Text, View } from "react-native";
import { api } from "../../service/api";
import Loading from "../../components/loading";
import Cover from "../../components/market/cover";
import Details, { PropsDetails } from "../../components/market/details";
import Coupon from "../../components/market/coupon";
import { Button } from "../../components/button";
import { CameraView, useCameraPermissions } from "expo-camera";
import { ScrollView } from "react-native-gesture-handler";
import { IconMapPin, IconScan } from "@tabler/icons-react-native";
type MarketProps = PropsDetails & {
  cover: string;
};
const Market: React.FC = () => {
  const params = useLocalSearchParams<{ id: string }>();
  const [market, setMarket] = useState<MarketProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [coupon, setCoupon] = useState<string | null>(null);
  const [couponIsFetching, setIsCouponIsFecthing] = useState<boolean>(false);

  const [isVisibleCameraModal, setIsVisibleCameraModal] =
    useState<boolean>(false);

  const [_, requesPermission] = useCameraPermissions();
  const qrLock = useRef(false);
  const getMarket = async () => {
    try {
      const { data } = await api.get(`/markets/${params.id}`);
      setMarket(data);
      setIsLoading(false);
    } catch (error) {
      Alert.alert("Error", "não foi possível carregar os dados", [
        {
          text: "Ok",
          onPress: () => router.back(),
        },
      ]);
    }
  };

  const handleOpenCamera = async () => {
    try {
      const { granted } = await requesPermission();
      if (!granted) {
        return Alert.alert("Câmera", " Você precisa habilitar i usi da câmera");
      }
      setIsVisibleCameraModal(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Câmera", "Não foi possivel utlizar a câmera");
    }
  };

  const getCoupon = async (id: string) => {
    console.log(id);
    console.log("id param ", params.id);

    try {
      setIsCouponIsFecthing(true);
      const { data } = await api.patch(`/coupons/${id}`);
      Alert.alert("Cupom", data.coupon);
      setCoupon(data.coupon);
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível ultilizar o cupom");
    } finally {
      setIsCouponIsFecthing(false);
    }
  };

  const handleUseCoupon = (id: string) => {
    setIsVisibleCameraModal(false);
    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom já resgatado. Deseja realmente resgatar o cupom ?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => getCoupon(id) },
      ]
    );
    qrLock.current = false;
  };

  useEffect(() => {
    getMarket();
  }, [params.id, coupon]);
  if (isLoading) {
    return <Loading />;
  }
  if (!market) {
    return <Redirect href="/home" />;
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="light-content" hidden={isVisibleCameraModal} />
        <Cover uri={market.cover} />
        <Details data={market} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>
      <View
        style={{
          padding: 32,
          flexDirection: 'row',
          gap: 14
        }}
      >
        <Button style={{width: 60}} onPress={()=> router.push({pathname: '/location', params: {market: JSON.stringify(market)}})}>
          <Button.Icon icon={IconMapPin}/>
        </Button>
        <Button style={{width:250}} onPress={handleOpenCamera}>
          <Button.Icon icon={IconScan}/>
          <Button.Title> Ler QR Code</Button.Title>
        </Button>
      </View>
      <Modal style={{ flex: 1 }} visible={isVisibleCameraModal}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true;
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />
        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button
            onPress={() => setIsVisibleCameraModal(false)}
            isLoading={couponIsFetching}
          >
            <Button.Title> Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default Market;
