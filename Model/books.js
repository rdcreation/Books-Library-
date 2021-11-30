const mongoose= require('mongoose');
const { Schema, model } = mongoose;

const userSchmea = new Schema(
    {
        bookname:{
            type:String,
            required:true,
            unique:true
        },
        author:{
            type:String
        },
        geners:{
            type:String          
        },
        content:{
            type:String            
        }
    },
    {
        timestamps:true
    }
)

module.exports = model("Books",userSchmea);