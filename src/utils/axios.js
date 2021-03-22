import axios from "axios";

const Axios = axios.create({
  baseURL: "http://127.0.0.1:9999",
  withCredentials: true
});

export default{
  // Vue.use(...) 会自动把 vue 传入
  install(Vue){
    // 相当于 Vue.prototype.axios = Axios
    Object.defineProperty(Vue.prototype,"axios",{value:Axios});
  }
}