export default {
  changeNum: function changeNum(num) {
    let a = (num * 10000/10000).toFixed(2);
    return a
  },
  changeMoney: function changeMoney(num) {
    let a = '$ '+ num
    return a
  }
}

