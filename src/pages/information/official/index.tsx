import React from 'react';
import {View, SafeAreaView, Text, Image, ImageBackground} from 'react-native'
import TopNavigationBar from '../../../navigation/TopNavigationBar'
import { styles } from '../../../styles/view-style/info'
import { GoBack } from '../../../utils/goBack'

const OfficialData: any = [
  {message: '温馨提示！', icon: require('../../../assets/pages/info/kf.png')},
  {message: '疫情面前，人人做好防护', icon: require('../../../assets/pages/info/kf.png')},
  {message: '不要去人多的地方聚集，做好防护措施！', icon: require('../../../assets/pages/info/kf.png')},
]

const OfficialInformation = (props: any) => {
  const statusbar = {
    backgroundColor: '#ffffff',
    barStyle: 'dark-content'
  }
  return (
    <SafeAreaView style={styles.official_container}>
      <TopNavigationBar
        title={'官方消息'}
        statusBar={statusbar}
        style={{ backgroundColor: '#fff' }}
        leftButton={GoBack(props)}
      />
      <View style={styles.official_container_flow}>
        {OfficialData.map((item: {icon: any; message: string;}) => (
          <View style={styles.official_content}>
            <Image source={item.icon} style={styles.official_icon}/>
            <ImageBackground resizeMode='stretch' style={styles.official_bg} source={require('../../../assets/pages/info/om.png')}>
              <Text style={styles.official_text}>{item.message}</Text>
            </ImageBackground>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default OfficialInformation;
