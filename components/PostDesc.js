import { View, Text } from "react-native";
import React, { useState } from "react";
import { DollarPrice, PostTitle } from "./SubInfo";
import { COLORS, SIZES, FONTS } from "../constants";

export const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <React.Fragment>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <PostTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <DollarPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.font,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
          >
            Description
          </Text>

          <View style={{ marginTop: SIZES.base }}>
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.regular,
                color: COLORS.primary,
                lineHeight: SIZES.large,
              }}
            >
              {text}
              {!readMore && " ..."}
              <Text
                onPress={() => {
                  if (!readMore) {
                    setText(data.description);
                    setReadMore(true);
                  } else {
                    setText(data.description.slice(0, 100));
                    setReadMore(false);
                  }
                }}
                style={{
                  fontSize: SIZES.small,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}
              >
                {readMore ? " Show Less" : " Read More"}
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};
