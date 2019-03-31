// import {NAME} from '@const'
// import Greeting from '@src/Greeting';

// const greeting = new Greeting(NAME, 'san');
// greeting.updateHonorific= 'chan';

// console.log(greeting.hello());
// console.log(greeting.getName);

const sayHello = async (name: string) => {
  return `Hello ${name}`;
};
const fn = async () => {
  const tyankatsu = await sayHello("tyankatsu");
  const kaoruko = await sayHello("kaoruko");

  console.log(tyankatsu, kaoruko);
};

fn();
