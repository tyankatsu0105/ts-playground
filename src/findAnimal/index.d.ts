interface Animal {
    name: string;
    voice: string;
}
declare const findAnimalVoice: (animals: Animal[], animalName: string) => string | undefined;
declare const animals: {
    name: string;
    voice: string;
}[];
