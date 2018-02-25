import Controller from '../../lib/controller';
import userFacade from './facade';

class UserController extends Controller {
    find = (res, req, next) => {
      console.log(res);
      next('an error');
    };
}

export default (new UserController(userFacade));

