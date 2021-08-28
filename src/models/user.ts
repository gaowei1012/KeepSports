import API from "../expand/api";
import { request } from "../expand/request";

interface IUserPostData {
  username: string
  password: string
}

class UserModel {
  static login(data: any) {
    return request(API.login, data, 'POST', '')
  }
  static register(data: any) {
    return request(API.register, data, 'POST', '')
  }
}

export default UserModel