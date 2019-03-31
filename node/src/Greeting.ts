

export default class Greeting {
  private name: string;
  private honorific: string;
  
  constructor(name: string, honorific: string){
    this.name = name;
    this.honorific = honorific;
  };
  hello(){
    return `Hello! ${this.name}-${this.honorific} :)`
  };
  goodbye(){
    return `Goodbye! ${this.name}-${this.honorific}... :_(`
  };
  get getName() {
    return this.name
  };
  set updateHonorific(honorific: string){
    this.honorific = honorific;
  }

}