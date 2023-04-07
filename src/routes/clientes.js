const express = require('express')
const router = express.Router();
const controller = require('../controllers/clientesController')

router.get("/", controller.list)
router.post("/add", controller.save)
router.get("/delete/:id", controller.delete)
router.get("/edit/:id", controller.edit)
router.post("/update/:id", controller.update)

module.exports = router