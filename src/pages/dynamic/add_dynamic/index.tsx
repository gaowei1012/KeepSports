import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/dynamic'
import { GoBack } from '../../../utils/goBack'

const AddDynamic = (props: any) => {
  return (
    <SafeAreaView>
      <TopNavigationBar leftButton={GoBack(props, false)} />
    </SafeAreaView>
  );
}

export default AddDynamic;
