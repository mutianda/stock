//
import request from "@/utils/axios";
//
// // console.log(request);
// // debugger
// //
// // export function getKline() {
// //
// //   return request({
// //     url: '/getKLine?shareCode=688309', // 假地址 自行替换
// //     method: 'get'
// //   })
// // }
// export function getAllKLine() {
//
//   return request({
//     url: 'getAllKline', // 假地址 自行替换
//     method: 'get'
//   })
// }
export default {
  getAllKLine(data) {
    return request({
      url: "getAllKline", // 假地址 自行替换
      method: "post",
      data
    });
  },
  getKline(data) {
    return request({
      url: "getKline", // 假地址 自行替换
      method: "post",
      data
    });
  },
  makeTxt(data) {
    return request({
      url: "makeTxt", // 假地址 自行替换
      method: "post",
      data
    });
  }
};
