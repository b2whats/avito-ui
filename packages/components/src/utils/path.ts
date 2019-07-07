import { theme } from '../theme'

function path<
  T, 
  P1 extends keyof NonNullable<T>
>(obj: T, prop1: P1): NonNullable<T>[P1] | undefined;

function path<
  T, 
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>
>(obj: T, prop1: P1, prop2: P2): NonNullable<NonNullable<T>[P1]>[P2] | undefined;

function path<
  T, 
  P1 extends keyof NonNullable<T>,
  P2 extends keyof NonNullable<NonNullable<T>[P1]>,
  P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>
>(obj: T, prop1: P1, prop2: P2, prop3: P3): NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3] | undefined;

function path(obj: any, str: string): any {
  const keys = str.split('.')
  let res = obj;

  for (let i = 0; i < keys.length; ++i)
    res = res[keys[i]];
      
  return res;
}

export default path