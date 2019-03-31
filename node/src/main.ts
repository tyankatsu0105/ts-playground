import {NAME} from '@const'
import Greeting from '@src/Greeting';

const greeting = new Greeting(NAME, 'san');
greeting.updateHonorific= 'chan';

console.log(greeting.hello());
console.log(greeting.getName);
