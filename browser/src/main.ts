import { AUTHOR_NAME } from "@const";
const hoge = AUTHOR_NAME;
console.log(hoge);
console.log("1111111");

const getObj = (obj:object) => {
  return obj?.user?.name
}
const obj:object = {
  user: {
    name: 'aaaaa'
  }
}
console.log(getObj(obj));

const double = (number:number):number => {
  return number * 2
}

console.log(10 |> double);
