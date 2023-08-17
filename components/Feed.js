import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign"; 
import Icon2 from "react-native-vector-icons/Fontisto"; 


import UsersList from "./UsersList";
import { FeedData } from "../constants";
import { COLORS } from "../constants";

const Feed = () => {
  const PostCard = ({ post }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={post.avatar} style={styles.postAvatar} />
        <Text style={styles.postUsername}>{post.username}</Text>
      </View>

      <Text style={styles.postSubtitle}>{post.subtitle}</Text>
      <Text style={styles.postDescription}>{post.description}</Text>
      {post.image && <Image source={post.image} style={styles.postImage} />}
      <View style={styles.postFooter}>
        <View style={styles.interactionButtons}>
          <TouchableOpacity style={styles.postButton}>
            <Icon name="like2" size={18} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton}>
            <Icon2 name="comment" size={18} color={COLORS.gray} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton}>
            <Icon name="sharealt" size={18} color={COLORS.gray} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.postDate}>{post.date}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <UsersList />

      <FlatList
        data={FeedData}
        contentContainerStyle={styles.postListContainer}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => <PostCard post={item} />}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  postListContainer: {
    paddingTop: 20,

    paddingHorizontal: 10,
  },
  postCard: {
    marginBottom: 10,
    padding: 16,
    marginTop: 40,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  postHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  postAvatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
    position: "absolute",
    top: -46,
  },
  postUsername: {
    top: -10,
    position: "absolute",
    left: 66,
    color: COLORS.gray,
  },
  postDate: {
    fontSize: 12,
    color: COLORS.gray,
  },
  postSubtitle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: "bold",
    paddingVertical: 8,
    paddingTop: 10,
  },

  postDescription: {
    fontSize: 12,
    color: COLORS.gray,
  },
  postImage: {
    marginTop: 10,
    width: "100%",
    height: 200,
  },
  postFooter: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  interactionButtons: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  postButton: {
    marginRight: 10,
  },
  postButtonText: {
    color: COLORS.gray,
  },
});

export default Feed;
