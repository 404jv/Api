const { Router } = require("express")
const ProductController = require("./controllers/ProductController")

const router = Router()

router.get("/api", ProductController.index)

router.get("/api/:id", ProductController.show)

router.post("/api", ProductController.store)

router.put("/api/:id", ProductController.update)

router.delete("/api/:id", ProductController.destroy)


module.exports = router