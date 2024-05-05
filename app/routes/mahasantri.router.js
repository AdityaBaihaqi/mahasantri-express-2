const mahasantriController = require("../controllers/mahasantri.controller");
const router = require("express").Router();

router.post("/", mahasantriController.create);
router.get("/", mahasantriController.index);
router.get("/:id", mahasantriController.show);
router.delete("/:id", mahasantriController.destroy);
router.put("/:id", mahasantriController.update);

module.exports = router;
