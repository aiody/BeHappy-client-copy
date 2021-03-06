import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import CenterList from './centerList';

const AddressModal = ({
  changeModalVisible,
  getCoordinate,
  centerInfo,
  setPhone,
  setLatitude,
  setLongitude,
  setAddressName,
  setRoadAddressName,
  selectCenter,
  setCenterName,
  showView,
}) => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);

  useEffect(() => {
    getCoordinate();
  }, []);

  const closeModal = () => {
    changeModalVisible(false);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={true}
      style={styles.container}
    >
      <View
        style={[
          styles.modal,
          {
            width: width - 20,
            height: height - 60,
          },
        ]}
      >
        <ScrollView>
          {centerInfo.map((center, index) => (
            <View style={styles.centerInfo} key={index}>
              <CenterList
                key={index}
                centerName={center.centerName}
                latitude={center.latitude}
                longitude={center.longitude}
                phone={center.phone}
                addressName={center.addressName}
                roadAddressName={center.roadAddressName}
                setPhone={setPhone}
                setLatitude={setLatitude}
                setLongitude={setLongitude}
                setAddressName={setAddressName}
                setRoadAddressName={setRoadAddressName}
                selectCenter={selectCenter}
                setCenterName={setCenterName}
                closeModal={closeModal}
                showView={showView}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  modal: {
    marginVertical: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  centerInfo: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddressModal;
