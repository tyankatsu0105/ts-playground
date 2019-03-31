

export default class Greeting {
  name: string;
  constructor(name: string){
    this.name = name;
  };
  hello(){
    return `Hello! ${this.name} :)`
  };
  goodbye(){
    return `Goodbye! ${this.name}... :_(`
  };
}