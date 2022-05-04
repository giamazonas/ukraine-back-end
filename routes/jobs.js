import { Router } from 'express';
import * as jobsCtrl from "../controllers/job.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router();

//Public routes
router.get('/', jobsCtrl.index);

//private routes
router.post("/add", checkAuth, jobsCtrl.create);
router.get("/:id", checkAuth, jobsCtrl.show);
router.put("/:id", checkAuth, jobsCtrl.edit);
router.delete("/:id", checkAuth, jobsCtrl.delete);

export { router }