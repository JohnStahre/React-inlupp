// skapa alla funktioner som körs från bland annat från product controler : router.get('/', productModel.getProducts);
//tre olika sätt att göra det på, står med i koden mest för min inlärning

const mongodb = require('mongoose');
const Product = require('./productSchema');

// missade först denna funktion
exports.getOneProduct = (req, res) => {

    Product.findOne({ _id: req.params.id })
      .then(data => {
        return res.status(200).json(data)
      })
      .catch(err => res.satus(500).json(err))
  }

exports.getProducts = (req, res) => {

    Product.find({}, (err, data) => {
        if(err) {
            return res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message || 'Something went wrong when trying to fetch the products'     
            })
        }

        res.status(200).json(data);
    })
    exports.getProducts = (req, res) => {

        Product.exists({_id: req.params.id }, (err, res) => {
            if(err) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: 'You made a bad request'
                })
            }
            if(result) {
                Product.findById(req.params.id)
                .then(product => res.status(200).json(product))
                .catch(err => res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: err.message
                }))
            } else {
                res.status(404).json({
                    statusCode:404,
                    status: false,
                    message:err || 'hoppsan, product dont exist'
                })
            }
        })
    }
}

// funktion för att skapa produktkollar om det finns produkt i databas jämför namnet, där vi kan få ett error eller resultat
// skickar alltid känslig data med post och inte med get
exports.createProduct = (req, res) => {
    Product.exists({ name: req.body.name }, (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }
        if(result) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'bad request, A product by that name allready exists, please update product instead'

            })
        }
// om den inte fanns skapar vi en ny instans av produkten som vi deklarerat i schema och skapar produkt
        const newProduct = new Product({

            name: req.body.name,
            short: req.body.short,
            desc: req.body.desc,
            price: req.body.price,
            image: req.body.image
        })
// sparar instansen produkten till databas med en save metod
        newProduct.save()
        .then(() => {
            res.status(201).json({
                stausCode: 201,
                status: true,
                message: 'Product created successfully'
            })
        })
        .catch(err => {
            res.status(500).json({
                statusCode: 500,
                staus: false,
                message: 'Failed to create product',
                err
            })
        })
    })
}

exports.updateProduct = (req, res) => {

    Product.exists({_id:req.params.id}, (err, result) => {
        if(err) {
            return res.status(400).json({
                stausCode: 400,
                status:false,
                message: 'Bad request'
            })
        }
        // om produkten finns och om vi vill uppdatera en produkt, får inte till det riktigt
        if(result) {
            Product.updateOne({_id: req.params.id}, {
                ...req.body,
                modified: Date.now()
            })
            .then(() => {
                res.status(200).json({
                    stausCode: 200,
                    status: true,
                    message: 'Product updated with success'
                })
            })
            .catch(() => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'failed to update product'
                })
            })


            // ifall produkten inte finns
        } else {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: err || 'Hoppsan this product does not exist'
            })
        }
    })
    
}

// gör en funktion som ska kunna ta bort produkt som vi också slänger in i controler
exports.deleteProduct = (req, res) => {
// kollar om produkten finns
    Product.exists({_id: req.params.id }, (err, result) => {
        if(err){
            return res.status(400).json({
                stausCode: 400,
                status: false,
                message: 'Bad request'
            })
        }

        if(result) {
            // om produkten finns tar vi bort den
            Product.deleteOne({_id: req.params.id})
            // vi väntar på detta om det går bra och om det går bra så skickar vi en respons på en status 200 att det gick bra
            .then(() => {
                res.status(200).json({
                    statusCode: 200,
                    status:true,
                    message: 'Product deleted'
                })
            })
            // om nåt går fel gör vi en catch
            .catch(err => {
                res.status(500).json({
                    statusCode:500,
                    status: false,
                    message: 'failed to delete product',
                    err
                })
            })

        } else {
            res.status(404).json({
                statusCode: 404,
                status: false,
                message: err || 'ooops,this product does not exist'
            })
        
        }

    })
}


// ett annat sätt att göra det på

// exports.getProducts = async (req, res) => {
//     const data =await Product.find()
    
//     res.status(200).json(data);
// } catch(err) {

//     res.status(500).json({
//         status: false,
//         message: err.message || 'Something went wrong when fetching the products'

//     })
//     {
            
// }

// tredje sättet att göra det på
// exports.getProducts = (req, res) => {
//     Product.find()
//     .then(data => res.status(200).json(data))
//     .catch(err => res.status(500).json)({
//         statusCode:500,
//         status:false,
//         message: err.message || 'Something went wrong when fetching the products'

//     })
