/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-22 10:10:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-22 11:24:23
 * @Description: 用户协议
 */

import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../../styles/view-style/privacyPolicy'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { GoBack } from '../../utils/goBack'

const UserAgreement = (props: any) => {
  const statusbar = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    barStyle: 'dark-content',
    translucent: true,
    hidden: false
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={GoBack(props, true)} title={'用户协议'} statusBar={statusbar} />
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.desc}>欢迎您使用我们提供的服务，本服务议旨在协助您了解 您在使用我们提供的服务的过程中，我们将会收集哪些 信息，为什么收集该些信息以及您如何查看并删除该些 信息。</Text>
          <Text style={styles.desc}>注意: 若您为未满16周岁的未成年人，请您在使用我们 为您提供的服务前，务必与到您的监护人(法定代理人） 共同阅读该隐私协议，并征得您的监护人(法定代理人） 的同意。</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.desc}>一、我们将会为您提供的服务，包括但不限于：</Text>
          <Text style={styles.desc}>1、手机号</Text>
          <Text style={styles.desc}>2、应用内相关服务等。</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>二、我们收集信息，是为了给您提供更好的服务。我 们希望您了解，我们会在您使用本应用相关服务时收 集哪些信息，为什么需要收集相关信息：</Text>
          <Text style={styles.desc}>
            1、创建账号时，您需要给我们提供个人信息，包括： 账号（若您是通过第三方账号登录注册，将会获取第 三方账号信息）、密码、设备ID、IP地址、邮箱账号 该些信息用于给您提供个性化服务，关联您账号内的
            物品信息，状态，为您提供账号的绑定、找回等账号 安全服务。
          </Text>
          <Text style={styles.desc}>2、我们会在您使用服务过程中收集的信息包括：账 号（若您是通过第三方账号登录注册，将会获取第三 方账号信息）、设备ID、IP地址、邮箱账号、地理位</Text>
          <Text style={styles.desc}>
            3、我们会在您使用服务过程中收集的信息包括：账 号（若您是通过第三方账号登录注册，将会获取第三 方账号信息）、设备ID、IP地址、邮箱账号、地理位 置、手机号码 ，该些信息用于信息给您提供个性化
            服务，关联您账号内的物品信息，状态，为您提供账 号的绑定、找回等账号安全服务，提供活动服务等。 以上的信息，由我们收集与储存，并不会提供给其他 第三方。我们会在您同意后，才会进行上述相关信息
            的收集。
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>三、我们基于为您提供合同约定的服务的目的进行上述信息的收集。您有权利不同意我们收集上述相关信息，但这将会导致我们无法向您提供完整的、更好的服务。</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>四、您有权查看和删除您的信息：</Text>
          <Text style={styles.desc}>1、您有权利通过联系官方客服的方式，联系我们查看我们已经收集的相关信息。若您认为我们收集的信息有误，您可以提出需求，更正信息。 </Text>
          <Text style={styles.desc}>
            2、您有权利通过点击界面悬浮窗内的【账号删除】 按钮的方式，进行信息的删除。在信息删除后，我们将不会保留相关信息，因此，在下一次您在使用相关服务时候，需要重新授权我们收集相关信息，
            以便于您使用我们提供的服务。为方便您使用我们提供的服务，您已经提供的信息，在您未删除的情况下，我们将会持续保存。
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>五、我们在服务内内置了安全功能，以保护您的信息。</Text>
          <Text style={styles.desc}>1、使用加密技术，以保证您的信息在传输过程中保持私密性；</Text>
          <Text style={styles.desc}>2、审查我们在收集、储存和处理信息方面的做法，以防未经授权的人员访问我们的系统；</Text>
          <Text style={styles.desc}>3、只允许需要个人信息以对其进行处理的员工访问个人信息，任何拥有此权限的人员需要尊重合同中规定的严格保密义务，否则可能会被处分。</Text>
          <Text style={styles.desc}>望您仔细阅读上述隐私协议内容，并确定是否同意我们根据上述协议内容获取相关信息并提供服务。</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserAgreement
