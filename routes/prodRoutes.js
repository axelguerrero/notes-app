const express = require("express")
router = express.Router()
prodRoute = require("..controllers/prodControllers")

router.get("/", prodRoute.prodController)

module.exports = router