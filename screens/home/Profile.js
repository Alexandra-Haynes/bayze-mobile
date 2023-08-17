import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { assets, COLORS } from "../../constants";


const Profile = () => {
  const friends = [
    {
      id: 1,
      avatar: assets.person02,
      name: "Amelia",
    },
    {
      id: 2,
      avatar: assets.person03,
      name: "Delia",
    },
    {
      id: 3,
      avatar: assets.bayze,
      name: "Bayze",
    },
    {
      id: 4,
      avatar: assets.nike,
      name: "Nike",
    },
    {
      id: 5,
      avatar: assets.user,
      name: "John Doe",
    },
    {
      id: 6,
      avatar: assets.user,
      name: "Jackson A",
   
    },
  ];

  let postCount=20
  let followingCount=22
  let followersCount=234

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.coverPhoto} source={assets.cover} />
        <View style={styles.profileContainer}>
          <Image style={styles.profilePhoto} source={assets.person01} />
          <Text style={styles.nameText}>Alex</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statsBox}>
          <Text style={styles.statsCount}>{postCount}</Text>
          <Text style={styles.statsLabel}>Posts</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsCount}>{followingCount}</Text>
          <Text style={styles.statsLabel}>Following</Text>
        </View>
        <View style={styles.statsBox}>
          <Text style={styles.statsCount}>{followersCount}</Text>
          <Text style={styles.statsLabel}>Followers</Text>
        </View>
      </View>

{/* ___________FRIENDS */}
      <View style={styles.section}>
        <Text style={styles.statCount}>1234</Text>
        <Text style={styles.statLabel}>Friends</Text>
      </View>

      <View style={styles.section}>
        <View>
          <ScrollView horizontal contentContainerStyle={styles.friendsScroll}>
            {friends.map((friend) => (
              <View style={styles.friendCard} key={friend.id}>
                <Image style={styles.friendImage} source={friend.avatar} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.bioText}>Bagdes and other info</Text>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    alignItems: "center",
  },
  coverPhoto: {
    width: "100%",
    height: 180,
  },
  profileContainer: {
    alignItems: "center",
    marginTop: -70,
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  bioContainer: {
    padding: 15,
  },
  bioText: {
    fontSize: 16,
    textAlign: "center",
    color: "#A9A9A9",
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:20,
  },
  statsBox: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  statsCount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  statsLabel: {
    fontSize: 14,
    color: '#999999',
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  statCount: {
    color: "#999",
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 16,
    color: "#999",
    marginLeft: 4,
  },
  button: {
    backgroundColor: "#9400D3",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  friendCard: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 2,
  },
  friendImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  friendsScroll: {
    paddingBottom: 10,
  },
};

export default Profile;
