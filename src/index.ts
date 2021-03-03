import { User } from './models/User'

const user = new User({name: 'cool', age: 20})

user.set({name: 'boy'})

console.log(user.get('name'))
console.log(user.get('age'))