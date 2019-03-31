export default class Greeting {
    private name;
    private honorific;
    constructor(name: string, honorific: string);
    hello(): string;
    goodbye(): string;
    readonly getName: string;
    updateHonorific: string;
}
