import {NAME} from '@const'
import Greeting from './Greeting';

const greeting = new Greeting(NAME);

console.log(greeting.hello());
