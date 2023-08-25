import React, {useState} from "react";

import { COLORS } from "../../constants";

import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import logoSource from "../../assets/icons/logo.png";


const apps = [
  {
    id: 1,
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/400px-Spotify_App_Logo.svg.png?20210620075506",
  },
  {
    id: 2,
    name: "Garmin",
    logo: "https://play-lh.googleusercontent.com/iij3jFOUWtGGTVwOqved-9DLpBsRbvgfyPpFuebloLUuIz-JO42h2UVyQ-c8IrRg9kb9=w240-h480-rw",
  },
  {
    id: 3,
    name: "ABC",
    logo: "https://cdn11.bigcommerce.com/s-do3nxddvbo/images/stencil/100x100/abc_stores_-_100x100_1588640320__05230.original.png",
  },
  {
    id: 4,
    name: "24h Fitness",
    logo: "https://www.nicepng.com/png/detail/341-3418386_24hour-fitness-24-hours-fitness-logo.png",
  },
  {
    id: 5,
    name: "Costco",
    logo: "https://e7.pngegg.com/pngimages/92/986/png-clipart-costco-gift-card-money-discounts-and-allowances-gift-miscellaneous-blue.png",
  },
];

export default function Apps  ()  {
  const data = apps;
  const [searchText, setSearchText] = useState("");
  const filteredData = data.filter((item) => item.name.includes(searchText));

  return (
    <ScrollView style={{ backgroundColor: COLORS.gray }}>

      <View style={styles.row}>
        <Image
          source={logoSource}
          style={[styles.mr7, { width: 45, height: 45 }]}
        />
        <Text style={styles.brandName}>Bayze</Text>
      </View>


      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Search apps.."
          value={searchText}
        />
      </View>
      <FlatList
        data={filteredData}
        horizontal
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.logo }} style={styles.logo} />
            <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
              {item.name}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandName: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
    opacity: 0.9,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
   
   
  },
  mr7: {
    marginRight: 7,
  },

  itemContainer: {
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 20,
    height: 120,
    width: 120,
  },
  logo: {
    borderRadius: 12,
    height: 70,
    width: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  searchContainer: {
    width: "100%",
    padding: 16,
  },
  searchInput: {
    height: 50,
    marginTop: 80,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    padding: 8,

    shadowColor: "#cccccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  name: {
    fontSize: 14,
    marginTop: 8,
    color: COLORS.gray,
    textAlign: "center",
    fontWeight: "bold",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

