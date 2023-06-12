import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { Image } from 'react-native';

type Props = {};

const managedItems = [
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Manage Hostel',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Rooms',
    link: 'rooms',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Services',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Contracts',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Electric and Water',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Reservation',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Tenants',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Invoices',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Payments',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Expenses',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Deposit',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Business analytics',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Problem',
  },
  {
    imgSource: require('@assets/images/avatar_placeholder.jpg'),
    title: 'Appointment',
  },
];

// Types 
// import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

// type Props = StackScreenProps<RootStackParamList, "Balance">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Manage</Text>
        </View>
        <View style={styles.sectionBody}>
          {/* render list icon */}
          {managedItems.map((item, index) => (
            <Pressable
              key={index}
              style={styles.manageCard}
              onPress={() => navigation.navigate('Rooms')}>
              <Image source={item.imgSource} style={styles.manageCardImage} />
              <Text numberOfLines={2} style={styles.manageCardTitle}>
                {item.title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>News</Text>
        </View>
        <View style={styles.sectionBody}></View>
      </View>
    </View>
  );
}
