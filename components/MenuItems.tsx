import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

// 1. Définition des types
interface MenuItem {
  name: string;
  price: string;
}

interface MenuSection {
  title: string;
  data: MenuItem[];
}

const menuItemsToDisplay: MenuSection[] = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

// 2. Sous-composant Item
const Item = ({ name, price }: MenuItem) => (
  <View style={styles.itemRow}>
    <Text style={styles.itemText}>{name}</Text>
    <Text style={styles.itemPrice}>{price}</Text>
  </View>
);

const Separator = () => <View style={styles.separator} />;

const ListFooter = () => (
  <Text style={styles.listFooterText}>
    End of Menu - My Restaurant 2025
  </Text>
);

// 3. Composant principal
export default function MenuItems() {
  const renderItem = ({ item }: { item: MenuItem }) => (
    <Item name={item.name} price={item.price} />
  );

  const renderSectionHeader = ({ section: { title } }: { section: MenuSection }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item.name + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={ListFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  sectionHeader: {
    backgroundColor: '#F4CE14',
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#333333',
  },
  itemText: {
    color: '#EDEFEE',
    fontSize: 18,
  },
  itemPrice: {
    color: '#EDEFEE',
    fontSize: 18,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  listFooterText: {
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#EDEFEE',
    backgroundColor: '#333333',
  },
});