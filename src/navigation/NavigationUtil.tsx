export class NavigationUtil {
  static navigation: any
  /**
   * 跳转到任意一级页面
   * @param {any} params
   * @param {elm} page
   */
  static goPage(params: any, page: any) {
    let navigation = NavigationUtil.navigation
    if (!navigation) {
      return
    }
    if (!params) {
      return
    }
    if (!page) {
      return
    }
    navigation.navigate(page, { ...params })
  }
  /**
   * 重置到首页
   * @param {params} params params
   */
  static restToHomePage(params: any) {
    const { navigation } = params
    navigation.navigate('Main')
  }

  /**
   * 跳转到上一级页面
   * @param navigation
   * @returns {null}
   */
  /**
   * 返回上一页
   * @param navigation
   */
  static goBack(navigation: any) {
    navigation.goBack()
  }

  // 返回
  static goPop(navigation: any) {
    navigation.pop()
  }
}
