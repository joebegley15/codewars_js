function inArray(arr1,arr2){
  let answers = [];
  arr1.some(el1=>{
    arr2.some(el2=>{
      if (el2.includes(el1)){
        answers.push(el1);
        return true;
      }
    })
  })
  return answers.sort((a,b) => a > b);
}