interface Animal {
  name: string;
  voice: string;
}


const findAnimalVoice = (animals: Animal[], animalName:string) => {
  const pickupAnimal = animals.find(animal => animal.name === animalName);
  if(pickupAnimal) {
    return pickupAnimal.voice;
  }
}

const animals = [
  {
    name: 'ねこ',
    voice: 'にゃー'
  },
  {
    name: 'いぬ',
    voice: 'わん'
  }
]

console.log(findAnimalVoice(animals,'ねこ'));
