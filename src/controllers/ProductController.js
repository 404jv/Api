const Product = require("../models/Product")

/* 
    store: Criação, index: Procura todos, show: Procura um, update: atualiza, destroy: deleta
*/

module.exports = {

    async store(req, res) {
        const user = { name, age, email } = req.body
        
        if (!user.name || !user.age || !user.email) {
            return res.status(422).json()
        }

        const product = Product.create({
            name,
            age,
            email,
        }).catch(() => { return res.status(404).json() })

        return res.status(201).json(product)

    },

    async index(req, res) {
        const products = await Product.find().catch(() => { return res.status(404).json() })

        return res.json(products)
    },

    async show(req, res) {
        try {
            const product = await Product.findById(req.params.id)

            return res.json(product)

        } catch (err) {
            if (err.kind === "ObjectId") return res.status(404).json()
        }
    },

    async update(req, res) {
        try {
            const product = await Product.findByIdAndUpdate(
                    req.params.id, 
                    req.body, 
                    { new: true }
            )

            return res.send(204).json(product)
        } catch (err) {
            if (err.kind === "ObjectId") return res.status(404).json()
        }
    },
    
    async destroy(req, res) {
        try {
            await Product.findByIdAndRemove(req.params.id)

            return res.send()
        } catch (err) {
            if (err.kind === "ObjectId") return res.status(404).json()
        }
    }
}
