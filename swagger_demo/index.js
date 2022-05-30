const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//console.log(swaggerDocument)

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/swagger_db', {
    
    useNewUrlParser: true,
})

//==========
const UserSchema = new mongoose.Schema({
    email: {
        type: String, required:true,
        trim: true, unique:true,
        match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },

    firstName: {type: String},
    lastName: {type: String}

});

mongoose.model('User', UserSchema);
const User = require('mongoose').model('User')


//
const createUser = (req, res, next) => {
    const user = new User(req.body);

    user.save( (err) => {
        if(err){
            next(err);
        }else{
            res.json(user);
        }
    });
};

const updateUser = (req, res, next,) => {

    if(!req.body) {
        res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
     User.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then(data => {
        if (!data) {
            res.status(404).send({
                message: `User not found.`
            });
        }else{
            res.send({ message: "User updated successfully." })
        }
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
  
};

const deleteUser = (req, res, next) => {

  
    User.findOneAndDelete(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err) {
            return res.status(404).send({
                message: "User not found with id " + req.params.user
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });
};

const getallUsers = (req, res, next) => {
    User.find( (err, users) => {
        if(err){
            next(err);
        }else{
            res.json(users);
        }
    });
};


const findOne = async(req, res, next) => {

    User.findById(req.params.id)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err) {
            return res.status(404).send({
                message: "user not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving user with id " + req.params.id
        });
    });
   
}

//routes

router.route('/users')
    .post(createUser)
    .get(getallUsers);

router.route('/users/:id')
    .put(updateUser)
    .delete(deleteUser)
    .get(findOne)

//router.param('userId', getByIdUser);

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server listening on port: ', port)
});

module.exports = app;