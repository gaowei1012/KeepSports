import API from "../expand/api";
import { request } from "../expand/request";
import { IUserPostData } from '../interface/pages/user';

class UserModel {
  static login(data: IUserPostData) {
    return request(API.login, data, 'POST', '')
  }
  static register(data: IUserPostData) {
    return request(API.register, data, 'POST', '')
  }
}

export default UserModel