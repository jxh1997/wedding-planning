// 登录信息cookie的操作
import Cookies from 'js-cookie';

// 存储cookie
export function setCookie (userName) {
    const info = Object.entries(userName);  // 二维数组

    for (let i = 0; i < info.length; i++) {
        Cookies.set(info[i][0] , info[i][1]);
    }

    return true;
}


// 读取cookie
export function getCookie () {
    return {
        username: Cookies.get('username'),
        dzlist: Cookies.get('dzlist'),
        groupid: Cookies.get('groupid'),
        id: Cookies.get('id'),
        imgpath: Cookies.get('imgpath'),
        nickname: Cookies.get('nickname'),
        sclist: Cookies.get('sclist'),
    }
}