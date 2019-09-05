import reduceValues from "@unction/reducevalues";
import attach from "@unction/attach";
import reverse from "@unction/reverse";
import {KeyChainType} from "./types";
import {ObjectType} from "./types";

export default function objectFrom<A, B> (keychain: KeyChainType<A>) {
  return function objectFromKeychain (value: B): ObjectType<B> {
    return reduceValues((accumulated: ObjectType<B>) => (key: A) => attach(key)(accumulated)({}))(value)(reverse(keychain));
  };
}
