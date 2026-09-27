function add(a: number, b: number): number {
  return a + b;
}

// add(1,"piyush") Argument of type 'string' is not assignable to parameter of type 'number'.
const result: number = add(41, 2);
console.log(result);

result.toFixed();
// result.charAt(1)
