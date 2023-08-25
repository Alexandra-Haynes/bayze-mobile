import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { assets, COLORS } from "../../constants";

export default function Notifications  (){
  const data = [
    {
      id: 3,
      image: assets.person02,
      name: "Amalia",
      text: "Hei, have you seen this?",
      
    },
    {
      id: 2,
      image: assets.bayze,
      name: "Bayze",
      text: "Your monthly report",
  
    },
    {
      id: 4,
      image: assets.nike,
      name: "Join us!",
      text: "New challenge starting soon",
     
    },
    {
      id: 5,
      image: assets.person03,
      name: "Maria MK",
      text: "New badge unlocked! kudos",
    
    },
    
  ];

  const [comments, setComments] = useState(data);

  return (
    <FlatList
      style={styles.root}
      data={comments}
      ItemSeparatorComponent={() => {
        return <View style={styles.separator} />;
      }}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={(item) => {
        const Notification = item.item;
       

        let mainContentStyle;
        if (Notification.attachment) {
          mainContentStyle = styles.mainContent;
          
        }
        return (
          <TouchableOpacity style={styles.container}>
            <Image source={Notification.image} style={styles.avatar} />
            <View style={styles.content}>
              <View style={mainContentStyle}>
                <View style={styles.text}>
                  <Text style={styles.name}>{Notification.name}</Text>
                  <Text>{Notification.text}</Text>
                </View>
                <Text style={styles.timeAgo}>2 hours ago</Text>
              </View>
           
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.white,
    padding:10,
  },
  container: {
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: "flex-start",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  text: {
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    color: COLORS.gray,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 60,

  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC",
  },
  timeAgo: {
    fontSize: 12,
    color: "#696969",
  },
  name: {
    fontSize: 16,
    color: COLORS.grayDark,
    fontWeight: 'bold',
    paddingRight:10,
  },
});
