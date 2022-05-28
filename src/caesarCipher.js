const caesarCipher = (str,shift) =>{
  const zCode = "z".charCodeAt(0);
  const zCapCode = "Z".charCodeAt(0);
  const aCode = "a".charCodeAt(0);
  const aCapCode = "A".charCodeAt(0);

  let result = "";
  for (let i = 0 ; i < str.length ; i++){
    let code = str.charCodeAt(i);
    let shiftedCode = code + shift;
    if (shiftedCode > zCode){
      shiftedCode = (shiftedCode % (zCode+1)) + aCode;
    }
    result += String.fromCharCode(shiftedCode);
  }

  return result;
}

export default caesarCipher;
