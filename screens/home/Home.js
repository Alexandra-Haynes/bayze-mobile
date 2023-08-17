import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";

import { COLORS, FeedData } from "../../constants";
import {
  HomeHeader,
  FocusedStatusBar,
  PostCard,
  UsersList,
} from "../../components";
import Feed from "../../components/Feed";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const [feedData, setFeedData] = useState(FeedData);

  const handleSearch = (value) => {
    if (!value.length) return setFeedData(FeedData);

    const filteredData = feedData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setFeedData(filteredData);
    } else {
      setFeedData(FeedData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FocusedStatusBar background={COLORS.primary} />

        <HomeHeader />
        <Feed />

        {/* bg color */}
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.black }} />
          <View style={{ flex: 1, backgroundColor: COLORS.grayDark }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
