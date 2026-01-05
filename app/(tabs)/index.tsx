import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import MenuItems from '../../components/MenuItems';

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <AppHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});