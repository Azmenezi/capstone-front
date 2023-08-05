import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DmButton from "../../components/Profile/DmButton";

const Profile = ({ navigation }) => {
  return (
    <View>
      <DmButton navigation={navigation} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});