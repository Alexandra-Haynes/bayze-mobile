import React, {useState} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native'
import { COLORS, assets } from '../constants';

 const usersListData = [
   { id: 1, name: "Bayze official", avatar: assets.bayze },
   { id: 2, name: "Amalia", avatar: assets.person02 },
   {
     id: 3,
     name: "Nike",
     avatar: assets.nike,
   },
   {
     id: 4,
     name: "Jackson",
     avatar: assets.person03,
   },
   {
     id: 5,
     name: "Alex",
     avatar: assets.person01,
   },
   {
     id: 6,
     name: "Garmin",
     avatar: assets.garmin,
   },
   {
     id: 7,
     name: "Smile",
     avatar: assets.person02,
   },
   {
     id: 8,
     name: "Lora",
     avatar: assets.person03,
   },
   {
     id: 9,
     name: "Nike",
     avatar: assets.nike,
   },
   {
     id: 10,
     name: "Bayze",
     avatar: assets.bayze,
   },
 ];


const UserListItem = ({ user }) => (
    <View style={styles.userItem}>
      <Image source={user.avatar} style={styles.avatar} />
      <Text style={styles.statusUserName} 
      ellipsizeMode='tail' numberOfLines={1}>{user.name}</Text>
    </View>
  );
  
  const UsersList = () => (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.userContainer}>
          {usersListData.map(user => <UserListItem key={user.id} user={user} />)}
        </View>
      </ScrollView>
    </View>
  )


const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    paddingBottom:120,
  },
  userContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor:'#fff',
    height:100,
  },
  userItem: {
    marginRight: 10,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  statusUserName:{
    marginTop:5,
    fontSize:12,
    color:COLORS.gray,
    width:60,
    textAlign:'center'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  
});

export default UsersList