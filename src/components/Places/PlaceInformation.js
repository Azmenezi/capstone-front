import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getPlaceById } from "../../apis/places";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../../apis";
import { useTheme } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function PlaceInformation({ _id }) {
  const { data: place, isLoading } = useQuery(["place", _id], () =>
    getPlaceById(_id)
  );
  const image = { uri: `${BASE_URL}/${place?.image}` };
  const theme = useTheme();
  return (
    <View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={{ height: 200, justifyContent: "center", alignItems: "center" }}
      >
        <View
          style={{
            height: 200,
            width: 500,
            backgroundColor: "black",
            opacity: 0.2,
            position: "absolute",
          }}
        ></View>
      </ImageBackground>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 45, color: "white", marginHorizontal: 10 }}>
          {place?.name}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginHorizontal: 10,
            marginBottom: 40,
            color: theme.colors.primary,
          }}
        >
          {place?.description}
        </Text>
        <View style={{ flexDirection: "row", gap: 7, marginHorizontal: 10 }}>
          <AntDesign name="star" size={24} color="#e69640" />
          <Text style={{ fontSize: 20, color: theme.colors.text }}>4.5</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 7,
            marginHorizontal: 10,
            marginTop: 5,
          }}
        >
          <Entypo name="location" size={24} color="#e65955" />
          <Text style={{ fontSize: 20, color: theme.colors.text }}>2.8 km</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
