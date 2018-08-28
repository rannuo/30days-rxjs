import * as rxjs from 'rxjs'
import * as rxjsoperators from 'rxjs/operators'

declare module 'rxjs' {
  export const operators: typeof rxjsoperators; 
}

declare global {
  const Rx: typeof rxjs;
}