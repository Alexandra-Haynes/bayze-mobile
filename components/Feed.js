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
import UsersList from "./UsersList";
import { FeedData } from "../constants";
import { COLORS } from "../constants";

const Feed = () => {


const PostCard = ({ post }) => (
  <View style={styles.postCard}>
    <View style={styles.postHeader}>
      <Image source={post.avatar} style={styles.postAvatar} />
      <Text style={styles.postUsername}>{post.username}</Text>
      <Text style={styles.postDate}>{post.date}</Text>
    </View>
   
    <Text style={styles.postSubtitle}>{post.subtitle}</Text>
    <Text style={styles.postDescription}>{post.description}</Text>
    {post.image && <Image source={post.image} style={styles.postImage} />}
    <View style={styles.postFooter}>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Like</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.postButtonText}>Share</Text>
      </TouchableOpacity>
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
paddingBottom:100,
  },
  postListContainer: {
    paddingTop: 20,

    paddingHorizontal: 10,
  },
  postCard: {
    marginBottom: 10,
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 5,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  postAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  postUsername: {
    flex: 1,
  },
  postDate: {
    fontSize: 12,
    color: COLORS.gray,
  },
  postSubtitle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: 'bold',
    paddingVertical: 8,
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
  },
  postButton: {
    marginRight: 10,
  },
  postButtonText: {
    color: COLORS.gray,
  },
});

export default Feed;
