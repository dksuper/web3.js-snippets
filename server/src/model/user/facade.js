import Facade from '../../lib/facade';
import userSchema from './schema';

class UserFacade extends Facade {}

export default new UserFacade('User', userSchema);
