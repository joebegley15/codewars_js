function solution(str){
  let returnMe = '';
  str.split('').forEach(x => {
    returnMe = x + returnMe;
    return null;
  });
  return returnMe;
}