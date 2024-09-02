import { Router } from 'express';
import uploadConfig from './config/multer';
import multer from 'multer';
import isAuth from './middlewares/isAuth';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailhUserController from './controllers/user/DetailUserController';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';
import CreateProductController from './controllers/product/CreateProductController';
import ListByCategoryController from './controllers/product/ListByCategoryController';
import CreateOrderController from './controllers/order/CreateOrderController';
import DeleteOrderController from './controllers/order/DeleteOrderController';
import ListOrderController from './controllers/order/ListOrderController';
import AddItemController from './controllers/order/AddItemController';
import DeleteItemController from './controllers/order/DeleteItemController';
import SendOrderController from './controllers/order/SendOrderController';
import DetailOrderController from './controllers/order/DetailOrderController';
import FinishOrderController from './controllers/order/FinishOrderController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

/* User routes */
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/userinfo', isAuth, new DetailhUserController().handle);

/* Category Routes */
router.post('/category', isAuth, new CreateCategoryController().handle);
router.get('/categories', isAuth, new ListCategoryController().handle);

/* Product Routes */
router.post('/product', isAuth, upload.single('file'), new CreateProductController().handle);
router.get('/category/products', isAuth, new ListByCategoryController().handle);

/* Order Routes */
router.post('/order', isAuth, new CreateOrderController().handle);
router.delete('/order', isAuth, new DeleteOrderController().handle);
router.get('/orders', isAuth, new ListOrderController().handle);
router.post('/item', isAuth, new AddItemController().handle);
router.delete('/item', isAuth, new DeleteItemController().handle);
router.put('/order/send', isAuth, new SendOrderController().handle);
router.get('/order/detail', isAuth, new DetailOrderController().handle);
router.put('/order/finish', isAuth, new FinishOrderController().handle);

export { router };