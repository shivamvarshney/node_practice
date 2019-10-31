const express = require('express');
const router = express.Router();

import AdminRoutes from './admin';
const router = Router();
router.use('/admin', AdminRoutes);
// add other routes...
export default router;