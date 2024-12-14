import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";
import Step from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";


const Steps: React.FC = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento "
      />
    </View>
  );
};

export default Steps;
