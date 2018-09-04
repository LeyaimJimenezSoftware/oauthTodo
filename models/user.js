const mongoose = require('mongoose');
//const schema = mongoose.schema;
const {Schema} = mongoose; //asigna el schema que esta en mongose

const userSchema = new Schema({
    googleId:String
});

mongoose.model('users', userSchema);

//no regresa nada