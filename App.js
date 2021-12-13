import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      images: [],
    };
    this.LoadWallpapers = this.loadWallpapers.bind(this);
  }

  loadWallpapers() {
    axios
      .get(
        "https://api.unsplash.com/photos/random?count=30&client_id=g-W2R8DnWaizl6ZSEW2LBaReApCeA38eYHoqLe9AqGI"
      )
      .then(function (response) {
        console.log(response.description);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("request completed");
      });
  }

  componentDidMount() {
    this.LoadWallpapers;
  }

  render() {
    return this.state.isLoading ? (
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color="gray" />
      </View>
    ) : (
      <View style={{ flex: 1, backgroundColor: "black" }}></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
