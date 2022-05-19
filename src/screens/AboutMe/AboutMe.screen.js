import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import styles from "./AboutMe.styles";

const AboutMeScreen = () => (
  <ScrollView style={styles.wrapper}>
    <SafeAreaView>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.subtitle}>
          Hello, My name is Aliaksei Paseishvili.
        </Text>
        <Text style={styles.description}>
          I am 25 and I was born in Belarus.
        </Text>
        <Text style={styles.description}>
          I am senior frontend developer. I finished Belarussian State
          University. I have mathematical engeneering education. I started my
          career in EPAM. And now I am working in Helseoversikt company. My
          expirience include three big production projects.
        </Text>
        <Text style={styles.description}>
          But don't think that I can talk only about work. I have such hobbies
          like: playing videogames, running, subsurfing and surfing. I'm married
          and we have a beautiful cat Oliver.
        </Text>
        <Text style={styles.description}>
          I created that repository because I want to help other people to learn
          JS, React and React-native. Initaly I started to learn my friend, but
          I believe that it will grow in something bigger.
        </Text>
      </View>
    </SafeAreaView>
  </ScrollView>
);

export default AboutMeScreen;
