/*
 * @Author: 一个为高薪头秃的程序媴
 * @Date: 2021-08-22 10:10:55
 * @LastEditors: 一个为高薪头秃的程序猿
 * @LastEditTime: 2021-08-22 11:10:30
 * @Description: 隐私政策
 */

import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import { styles } from '../../styles/view-style/privacyPolicy'
import TopNavigationBar from '../../navigation/TopNavigationBar'
import { GoBack } from '../../utils/goBack'

const PrivacyPolicy = (props: any) => {
  const statusbar = {
    backgroundColor: '#fff',
    barStyle: 'dark-content',
    translucent: false,
    hidden: false
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar leftButton={GoBack(props, true)} title={'隐私政策'} statusBar={statusbar} />
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.desc}>1. 重要说明</Text>
          <Text style={styles.desc}>本App在针对您的个人使用需求为您提供便利的软件和服务的同时，承诺保护您的隐私。本隐私权声明适用于本App的所有相关软件和服务。</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>2. 信息的收集和使用</Text>
          <Text style={styles.desc}>
            App使用以下SDK集成服务：使用SDK名称：友盟SDK 服务类型：统计分析收集个人信息类型：设备信息（IMEI/MAC/Android
            ID/IDFA/OpenUDID/GUID/SIM卡IMSI/地理位置等）隐私权政策链接：https://www.umeng.com/page/policy
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>3. 计算机相关信息的收集和使用</Text>
          <Text style={styles.desc}>
            如果您使用具备支持Internet功能的软件，有关您的计算机的信息(“标准计算机信息”)便会发送至您所访问的网站和所使用的在线服务。本App将利用标准计算机信息来为您提供各项支持Internet的服务。标准计算机信息通常包含诸如以下各类信息：您的IP地址、操作系统版本、浏览器版本，以及区域设置和语言设置。{' '}
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>4.使用规则</Text>
          <Text style={styles.desc}>用户在使用本App软件及服务过程中，必须遵循以下原则： </Text>
          <Text style={styles.desc}>4. 1 遵守中国有关的法律和法规；</Text>
          <Text style={styles.desc}>4.2 遵守所有与网络服务有关的网络协议、规定和程序； </Text>
          <Text style={styles.desc}>4.3 不得为任何非法目的而使用网络服务系统； </Text>
          <Text style={styles.desc}>4.4 不得以任何形式使用本App软件及服务侵犯本App 的权利和商业利益；</Text>
          <Text style={styles.desc}>4.5 不得利用本App软件及服务进行任何可能对互联网 或移动网正常运转造成不利影响的行为； </Text>
          <Text style={styles.desc}>4.6 不得利用本App软件及服务上传、展示或传播任何 虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的 、庸俗淫秽的或其他任何非法的信息资料； </Text>
          <Text style={styles.desc}>4.7 不得侵犯其他任何第三方的专利权、著作权、商标 权、名誉权或其他任何合法权益； </Text>
          <Text style={styles.desc}>4.8 不得利用本App软件及服务进行任何不利于本App 的行为； </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>5.使用规则</Text>
          <Text style={styles.desc}>
            5.1 本App提供的软件以及网络服务中包含的任何文本、 图片、图形、音频和/或视频资料均受版权、商标和/或 其它财产所有权法律的保护，未经相关权利人同意，上
            述资料均不得在任何媒体直接或间接发布、播放、出于 播放或发布目的而改写或再发行，或者被用于其他任何 商业目的。所有这些资料或资料的任何部分仅可作为私
            人和非商业用途而保存在某台计算机内。本App不就由 上述资料产生或在传送或递交全部或部分上述资料过程 中产生的延误、不准确、错误和遗漏或从中产生或由此
            产生的任何损害赔偿，以任何形式，向用户或任何第三 方负责。
          </Text>
          <Text style={styles.desc}>
            5.2 本App提供软件以及网络服务而使用的任何软件（ 包括但不限于软件中所含的任何图象、照片、动画、录 像、录音、音乐、文字和附加程序、随附的帮助材料）
            的一切权利均属于该软件的著作权人，未经该软件的著 作权人许可，用户不得对该软件进行反向工程（revers e engineer）、反向编译（decompile）或反汇编（dis assemble）。{' '}
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>6. 隐私保护</Text>
          <Text style={styles.desc}>
            6.1 保护用户隐私是本App的一项基本政策，本App保 证不对外公开或向第三方提供单个用户的注册资料及用 户在使用软件以及网络服务时存储在本App的非公开内 容，但下列情况除外：
          </Text>
          <Text style={styles.desc}>6.1.1 事先获得用户的明确授权； </Text>
          <Text style={styles.desc}>6.1.2 根据有关的法律法规要求； </Text>
          <Text style={styles.desc}>6.1.3 按照相关政府主管部门的要求；</Text>
          <Text style={styles.desc}>6.1.4 为维护社会公众的利益；</Text>
          <Text style={styles.desc}>6.1.5 为维护本App的合法权益。 </Text>
          <Text style={styles.desc}>
            6.2 本App可能会与第三方合作向用户提供相关的网络 服务，在此情况下，如该第三方同意承担与本App同等 的保护用户隐私的责任，则本App有权将用户的注册资 料等提供给该第三方。{' '}
          </Text>
          <Text style={styles.desc}>6.3 在不透露单个用户隐私资料的前提下， 本App有权 对整个用户数据库进行分析并对用户数据库进行商业上 的利用。 </Text>
          <Text style={styles.desc}>6.4 我们的儿童政策： 我们不向6岁以下的儿童提供服 务。 </Text>
          <Text style={styles.desc}>6.5 任何时候如果您对我们的隐私策略有疑问，请在线 留言联系我们，我们会尽一切努力，请合理适当的范围 内立即改善这个问题。</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>7. 对本隐私声明的更改</Text>
          <Text style={styles.desc}>
            我们会不定期地更新本隐私声明，以反映我们在产品、 服务以及客户反馈方面的变化。如果本声明有重大更改 ，我们将在实施更改前发布此类更改的通知，或者直接
            给您发送通知来告知您本人。我们鼓励您定期查阅本声 明，以便随时了解本App采用何种方式来保护您的信息。{' '}
          </Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.desc}>8. 详细信息</Text>
          <Text style={styles.desc}>
            本公司为九江诚奥网络科技有限公司，位于江苏省九江 市濂溪区长虹大道280号新华国际商务中心E幢19层， 企业邮箱为: 1740303917@qq.com，欢迎您就本隐私
            声明提出意见。如果您有关于本声明方面的问题，或者 认为我们未遵守本声明，请联系在线客服。
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PrivacyPolicy
