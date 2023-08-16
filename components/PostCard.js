import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { CircleButton, RectButton } from "./Button";
import { SubInfo, PostTitle } from "./SubInfo";

const PostCard = ({ data }) => {
  const navigation = useNavigation();
  const [heartPressed, setHeartPressed] = useState(false);
  const toggleHeart = () => {
    setHeartPressed(!heartPressed);
  };
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton
          imgUrl={heartPressed ? assets.heart : assets.heart_filled}
          handlePress={toggleHeart}
          right={10}
          top={10}
        />
      </View>

      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <PostTitle
          title={data.title}
          subtitle={data.subtitle}
          description={data.description}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
        
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() => navigation.navigate("Details", { data })}
          />
        </View>
      </View>
    </View>
  );
};

export default PostCard;
