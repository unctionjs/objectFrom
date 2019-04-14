import reduceValues from "@unction/reducevalues";
import attach from "@unction/attach";
import reverse from "@unction/reverse";
export default function objectFrom (keychain) {
  return function objectFromKeychain (value) {
    return reduceValues((accumulated) => (key) => attach(key)(accumulated)({}))(value)(reverse(keychain));
  };
}
