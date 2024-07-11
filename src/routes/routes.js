import { Router } from "express";
import FormController from "../controllers/form.controller.js";
import Components from "../controllers/components.controller.js";
const router = Router();

router.route("/").get(FormController.get).post(FormController.post);
router.get("/components/:name", Components.getComponent);
router.get("/components/fields/:name", Components.getField);
router.get("/create", FormController.createForm);
router.get("/listform", FormController.listForm);
router.get("/viewform", FormController.viewForm);
router.post("/submit", FormController.post);

export default router;
