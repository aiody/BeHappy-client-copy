import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchGeo from '../components/Map/SearchGeo';
import {
  controlCoordinate,
  controlCenterData,
} from '../modules(reducers)/currentOnMap';

const SearchGeoContainer = ({
  coordinate,
  controlCoordinate,
  controlCenterData,
  navigation,
}) => {
  return (
    <SearchGeo
      coordinate={coordinate}
      controlCoordinate={controlCoordinate}
      controlCenterData={controlCenterData}
      navigation={navigation}
    />
  );
};

const mapStateToProps = (state) => ({
  coordinate: state.handleCurrentOnMap.coordinate,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      controlCoordinate,
      controlCenterData,
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchGeoContainer);
