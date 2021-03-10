import { User } from './models/User'

const user = new User({ name: 'Hooo', age: 555 })

user.events.on('change', () => {
    console.log('object')
})

user.events.trigger('change')
// user.save();