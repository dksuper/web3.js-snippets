export default class UserController {
    find = (res, req, next) => {
      console.log(res);
      next('an error');
    };
}

// export default (new UserController(userFacade));

