import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ChatTextInput({ msgInfo, setMsgInfo, sendMsgFn }) {
  const [textAlign, setTextAlign] = useState((prev) => prev);
  const handleSendMessage = () => {
    const messageToSend = msgInfo.trim();
    if (messageToSend.length > 0) {
      sendMsgFn(messageToSend);
      setMsgInfo("");
    }
  };
  const handleChangeText = (value) => {
    setMsgInfo(value);

    // Simple logic to detect if the text is Arabic, you might want to enhance this
    if (msgInfo.length < 2 && /[\u0600-\u06FF]/.test(value)) {
      setTextAlign("right");
    } else if (msgInfo.length < 2) {
      setTextAlign("left");
    }
  };
  const theme = useTheme(); // Get the currently active theme
  return (
    <>
      <TextInput
        multiline
        value={msgInfo}
        placeholder="message.."
        placeholderTextColor={"#ffffff70"}
        style={{
          padding: 10,
          width: "78%",
          marginBottom: 20,
          marginTop: 10,
          backgroundColor: "#fff",
          bordercolor: theme.colors.invertedText,
          borderWidth: 1,
          borderRadius: 10,
          minHeight: 25,
          maxHeight: 125,
          justifyContent: "center",
          textAlign: textAlign, // Apply the text alignment
          marginHorizontal: 2,
          color: "black",
        }}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handleSendMessage}
      >
        <MaterialCommunityIcons
          name="send-circle-outline"
          size={36}
          color={theme.colors.primary}
          style={{ margin: 10, top: -5 }}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({});
