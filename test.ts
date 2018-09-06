
class Person {
  id: number = 1;

  child?: Child = new Child();

  toObject(): PickNFP<Person>{
    return 'something' as any;
  }
}

class Child {
  childName: string = 'male';

  id?: number = 1;

  toObject() {
    return this.childName;
  }
}

type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T];

type PrimitiveType = number | string | boolean | null | undefined | symbol;

// type PickNFP<T, AndKey = null> = {
//   [P in Exclude<NonFunctionPropertyNames<T>, AndKey>]: T[P] extends PrimitiveType ? T[P] : PickNFP<T[P], AndKey>;
// };




// type PickF<T> = {
//   [P in keyof PickR<T>]: T[P] | PickF<T[P]> ? T[P] : never;
// }

type FunctionPropertyNames<T> = {[K in keyof T]: T[K] extends Function ? K : never }[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;


// type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
type NonFunctionProperties<T, AndKey = null> = Pick<T, Exclude<NonFunctionPropertyNames<T>, AndKey>>;

interface Part {
    id: number;
    name: string;
    subparts: Part[];
    updatePart(newName: string): void;
}

type T40 = FunctionPropertyNames<Part>;  // "updatePart"
type T41 = NonFunctionPropertyNames<Part>;  // "id" | "name" | "subparts"
type T42 = FunctionProperties<Part>;  // { updatePart(newName: string): void }
type T43 = PickNFP<Part>;  // { id: number, name: string, subparts: Part[] }

// type NonFunctionPropertyNames<T> = {
//   [K in keyof T]: T[K] extends Function ? never : K
//   }[keyof T];
  
type OptionalPropertyNames<T> = {
[K in keyof T]-?: undefined extends T[K] ? K : never
}[keyof T];

type RequiredPropertyNames<T> = {
[K in keyof T]-?: undefined extends T[K] ? never : K
}[keyof T];

// type PrivateType = string | number | boolean | Date | RegExp | null | undefined | symbol;
type PickNFP<T> = {
[P in Exclude<NonFunctionPropertyNames<T>, OptionalPropertyNames<T>>]: T[P] extends PrimitiveType ? T[P] : PickNFP<Exclude<T[P], undefined>>
} & {
[P in Exclude<NonFunctionPropertyNames<T>, RequiredPropertyNames<T>>]?: T[P] extends PrimitiveType ? T[P] : PickNFP<Exclude<T[P], undefined>>
}
