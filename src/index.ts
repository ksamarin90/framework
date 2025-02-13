import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const root = document.getElementById('root');

if (root) {
    const userEdit = new UserEdit(root, User.buildUser({ name: 'Steve', age: 20 }));
    userEdit.render();
    console.log(userEdit)
} else {
    throw new Error('Root element not found');
}