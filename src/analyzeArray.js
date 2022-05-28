
const analyzeArray = (arr) => {
  let len = arr.length;
  let max = arr[0];
  let min = arr[0];
  let count = 0;
  for (let i = 0 ; i < len ; i++){
    if (max < arr[i]){
      max = arr[i];
    }
    if (min > arr[i]){
      min = arr[i];
    }
    count += arr[i];
  }
  let average = count/len;
  let result = {
    length: len,
    max: max,
    min: min,
    average: average
  };
  return result;
}

export default analyzeArray;
