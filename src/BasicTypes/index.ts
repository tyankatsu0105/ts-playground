'use strict'

const isDone:boolean = false;

const decimal:number = 10;

const hex:number = 0xf00d;

const color:string = 'red';

const colorName:string = `
color is ${color}
hex is ${hex}
`

const list:number[] = [1,2,3,4,5]

const list2:Array<number> = [1,2,3]

const list3: [string,number] = ['hoge', 10]

console.log(typeof list3[0].substr(1));
// console.log(typeof list3[1].substr(1));

// enum Color {Red,Blue,Green}
// const c:Color = Color.Red
enum Color {Red = 1,Blue,Green}
const c:string = Color[3]
console.log(c);

const hoge:any = []

const warnUser = ():void => {
  console.log('aaaaaaaaa'); 
}

const ud:undefined = undefined
const nl:null = null

const error = (message:string):never => {
  throw new Error(message)
}

const obj = (obj:object) => {
  return obj
}
obj({props: 'name'})

let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;