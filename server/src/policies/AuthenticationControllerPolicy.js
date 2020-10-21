const Joi = require('joi') // Joi is used to validate user input

module.exports = {
    //Middleware - Joi Validation
    register (req, res, next){
        //Joi schema
        const schema = Joi.object({
            username: Joi.string().min(2).max(16),
            email: Joi.string().email(),
            password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')),
              // this says it has to contain letters a to z, numbers 1 to 9 and a max of 32 characters, min of 8
            street: Joi.string(),
            city: Joi.string().alphanum().min(2).max(20),
            state: Joi.string().alphanum().min(2).max(30),
            postal: Joi.number(),
            profileimg: Joi.string().min(2).max(150)
            
        });
        //Using Joi schema to validate user data
        // the validate function that is housed within Joi, it takes one paramater: the data thats entered from teh user. validate will cross refernce that data agianst the schema we created above. Either that info will be loaded into "value" or it will spit an error
        const {error, value} = schema.validate(req.body);
        
        //If there is a error
        if(error){
            //Switch statement checks what error occurred and send back a message to the user about the error
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `${error}The password failed to match the requirements:
                        <br>
                        1. It must contain ONLY the following characters: lowercase, uppercase, numbers
                        <br>
                        2. Must be between 8 and 32 characters
                        `
                    })
                    break
                   
                    case 'username':
                        res.status(400).send({
                            error: 'You must provide a username'
                        })
                    break
                    
                    // case 'street':
                    //     res.status(400).send({
                    //         error: 'You must provide a street address'
                    //     })
                    // break
                    
                    case 'city':
                        res.status(400).send({
                            error: 'You must provide a city'
                        })
                    break
                    
                    case 'state':
                        res.status(400).send({
                            error: 'You must provide a state'
                        })
                    break
                    
                    // case 'postal':
                    //     res.status(400).send({
                    //         error: 'You must provide a postal code'
                    //     })
                    // break
                    
                    case 'profileimg':
                        res.status(400).send({
                            error: 'You must provide a profile image'
                        })
                    break
                    
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                   
            }
        }else{
          // next calls the next bit of middleware
            next()
        }
    }
}
