import API from "../expand/api";
import { request } from "../expand/request";
import { IUserPostData, IGetUserInfo, ICheckPhone } from '../interface/pages/user';

class UserModel {
  static login(data: IUserPostData) {
    return request(API.login, data, 'POST', '')
  }
  static register(data: IUserPostData) {
    return request(API.register, data, 'POST', '')
  }
  static getUserInfo(data: IGetUserInfo, token: string) {
    console.log('token', token)
    return request(API.getUserInfo, data, 'POST', token)
  }
  static checkPhone(data: ICheckPhone) {
    return request(API.checkPhone, data, 'POST', '')
  }
  static resetPassword(data: IUserPostData, token: string) {
    return request(API.resetPwd, data, 'POST', token)
  }
  static deleteUser(data: IGetUserInfo, token: string) {
    return request(API.delUser, data, 'POST', token)
  }
}

export default UserModel