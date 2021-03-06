import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import getEnvVars from '../../environment';
const { ec2 } = getEnvVars();

export default function Logout({ controlLogin, token }) {
  let logoutUser = () => {
    fetch(ec2 + '/user/logout', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((payload) => {
        if (payload.token === '') {
          controlLogin(-1, null);
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <>
      <TouchableOpacity style={styles.listItem} onPress={logoutUser}>
        <MaterialCommunityIcons
          name='account-remove-outline'
          color='black'
          size={25}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.itemText}>로그아웃</Text>
      </TouchableOpacity>
      <View
        style={{
          alignSelf: 'center',
          width: '98%',
          height: 1,
          backgroundColor: '#f5f5f5',
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: 'grey',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: '6%',
    paddingVertical: '5%',
  },
  itemText: {
    fontSize: 18,
    color: 'black',
  },
});
