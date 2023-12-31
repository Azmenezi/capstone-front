import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getAllPosts } from "../../apis/posts";
import { useQuery } from "@tanstack/react-query";
import PostCard from "./PostCard";
import SkeletonPost from "../Skeleton/SkeletonPost";

const PostList = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

  if (isLoading)
    return (
      <View>
        {<SkeletonPost />}
        {<SkeletonPost />}
      </View>
    );
  const renderItem = ({ item }) => {
    return <PostCard post={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default PostList;

const styles = StyleSheet.create({});
