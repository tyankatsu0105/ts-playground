declare var foo: any;

foo = 123

// declare var process: any;

// process.exit()

interface Process {
  hoge(code?: number): void;
}

declare var process:Process

process.hoge()

interface Tyankatsu {
  hoge(code?: number): void
}

declare let tyankatsu:Tyankatsu

tyankatsu.hoge(111)