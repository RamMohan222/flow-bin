// @flow

type Person = {
  firstName: string,
  lastName: string,
  salary: number
};

function savePerson(person: Person): void {
  console.log('Saving the person details...');
  console.log('Perons:', person);
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

function processFile(fileName: string): boolean {
  console.log('Processing the file...');
  console.log('fileName:', fileName);
  return true;
}

function updateStatus(status: 'START' | 'STOP') {
  console.log('Status:', status);
}

function plainNormalFunction(arg1, arg2) {
  return arg1 + arg2;
}

addNumbers(1, 3);
updateStatus('START');
processFile('fileName.txt');
savePerson({ firstName: 'FirstName', lastName: 'LastName', salary: 1000000 });
plainNormalFunction(1, 2);
