"use strict";
var findAnimalVoice = function (animals, animalName) {
    var pickupAnimal = animals.find(function (animal) { return animal.name === animalName; });
    if (pickupAnimal) {
        return pickupAnimal.voice;
    }
};
var animals = [
    {
        name: 'ねこ',
        voice: 'にゃー'
    },
    {
        name: 'いぬ',
        voice: 'わん'
    }
];
console.log(findAnimalVoice(animals, 'ねこ'));
//# sourceMappingURL=index.js.map