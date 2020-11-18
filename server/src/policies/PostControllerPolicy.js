const Joi = require('joi') // Joi is used to validate user input

module.exports = {
    //Middleware - Joi Validation
    postPost (req, res, next){
        //Joi schema
        const schema = Joi.object({
            title: Joi.string().min(2).max(50),
            image: Joi.string().min(2).max(300),
            price: Joi.string().min(1).max(5),
            unit: Joi.string().optional(),
            category: Joi.string().min(1).max(15),
            isOrganic: Joi.string().min(1).max(15),
            ready: Joi.string().min(1).max(15),
            description: Joi.string().trim().min(1).max(300),
            UserId: Joi.number(),
            author: Joi.string().trim(),
            userImg: Joi.string(),
            userCity: Joi.string().trim(),
            userEmail: Joi.string().email(),
            dateTime: Joi.string().optional(),
            id: Joi.number().optional(),
            createdAt:Joi.date().optional(),
            updatedAt:Joi.date().optional(),
            
        });
        //Using Joi schema to validate user data
        // the validate function that is housed within Joi, it takes one paramater: the data thats entered from teh user. validate will cross refernce that data agianst the schema we created above. Either that info will be loaded into "value" or it will spit an error
        const {error, value} = schema.validate(req.body);
        
        //If there is a error
        if(error){
            //Switch statement checks what error occurred and send back a message to the user about the error
            switch (error.details[0].context.key) {
                case 'title':
                    res.status(400).send({
                        error: 'You must provide a title'
                    })
                    break
                case 'image':
                    res.status(400).send({
                        error: 'You must provide an image'
                    })
                    break
                   
                    case 'price':
                        res.status(400).send({
                            error: 'You must provide a price'
                        })
                    break
                    
                    // case 'street':
                    //     res.status(400).send({
                    //         error: 'You must provide a street address'
                    //     })
                    // break
                    
                    case 'description':
                        res.status(400).send({
                            error: 'You must provide a description'
                        })
                        
                    break
                    
                    
                    
                default:
                    res.status(400).send({
                        error: 'Invalid post information'
                        
                    })
                    console.log(error.message)
                   
            }
        }else{
          // next calls the next bit of middleware
            next()
        }
    }
}
