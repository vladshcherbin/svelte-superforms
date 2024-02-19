import { email, minLength, object, string, toLowerCase, toTrimmed } from 'valibot'

export default object({
  email: string([toTrimmed(), toLowerCase(), email()]),
  password: string([toTrimmed(), minLength(8)])
})
