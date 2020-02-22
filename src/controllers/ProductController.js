const Product = require("../models/Product")

/* 
    store: Criação, index: Procura todos, show: Procura um, update: atualiza, destroy: deleta
*/

module.exports = {

    async store(req, res) {
        const { name, age, email } = req.body
        
        const product = Product.create({
            name,
            age,
            email,
        })

        return res.json(product)
    },

    async index(req, res) {
        const products = await Product.find()

        return res.json(products)
    },

    async show(req, res) {
        try {
            const { id } = req.params
            const product = await Product.findById(id)

            return res.json(product)

        } catch (err) {
            if (err.kind === "ObjectId") return res.status(204).json()
        }
    },

    async update(req, res) {
            try {
                const { id } = req.params
                
                const product = await Product.findByIdAndUpdate(id, req.body, { new: true })

                return res.json(product)
            } catch (err) {
                if (err.kind === "ObjectId") return res.status(204).json()
            }
    },
    
    async destroy(req, res) {
        try {
            const { id } = req.params

            await Product.findByIdAndRemove(id)

            return res.send()
        } catch (err) {
            if (err.kind === "ObjectId") return res.status(204).json()
        }
    }
}
