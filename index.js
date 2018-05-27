import reduceValues from "@unction/reducevalues"
import attach from "@unction/attach"
import reverse from "@unction/reverse"

import type {UnaryFunctionType} from "types"
import type {RecordType} from "types"
import type {KeyChainType} from "types"
import type {KeyType} from "types"

export default function objectFrom (keychain: KeyChainType): UnaryFunctionType {
  return function objectFromKeychain (value: mixed): RecordType {
    return reduceValues(
      (accumulated: RecordType): UnaryFunctionType => (key: KeyType): RecordType => attach(key)(accumulated)({})
    )(
      value
    )(
      reverse(keychain)
    )
  }
}
