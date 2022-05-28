
const Calculator = {
  add: (x,y) => {
    return x+y;
  },

  sub: (x,y) => {
    return x-y;
  },

  multi: (x,y) => {
    return x*y
  },

  div: (x,y) => {
    if (y === 0) return null;
    return x/y;
  }


}

export default Calculator;
