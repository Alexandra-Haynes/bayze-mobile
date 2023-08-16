import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import { COLORS, SIZES, SHADOWS, FONTS, assets } from "../../constants";
import {
  CircleButton,
  RectButton,
  SubInfo,
  FocusedStatusBar,
  PostDesc,
 
} from "../../components";

const DetailsHeader = ({ data, navigation, isHeartPressed, toggleHeart }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />
    <CircleButton
      imgUrl={isHeartPressed ? assets.heart : assets.heart_filled}
      handlePress={toggleHeart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route, navigation }) => {
  // we get route and nav by default from app.js NavigationContainer
  // console.log(route) to see the object key name params
  const [heartPressed, setHeartPressed] = useState(false);

  const toggleHeart = () => {
    setHeartPressed(!heartPressed);
  };

  const { data } = route.params;
  // clg(data) to see the data object: id image name price

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>


    </SafeAreaView>
  );
};

export default Details;
