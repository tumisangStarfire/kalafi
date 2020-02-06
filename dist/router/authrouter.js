import { Router } from "express";
import registerUser from 'controller/auth/RegisterController';
import login from 'controller/auth/LoginController';
const router = Router();
router.route('/api/register').post(registerUser);
router.route('/api/login').post(login);
export default router;
//# sourceMappingURL=authrouter.js.map