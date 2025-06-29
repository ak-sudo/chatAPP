const mongoose = require('mongoose');

const verificationSchema = new mongoose.Schema({
    fullName :{
        type: String,
        required:  true,
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    reason:{
        type:String,
        required:true,
    },
    portfolio:{
        type:String,
        default:null,
    },
    isVerified:{
        type: Boolean,
        required: true,
    },
    isVerificationRequest:{
        type:Boolean,
        required:true,
    }
});

const VerificationRequest = mongoose.model('VerificationRequest',verificationSchema);

module.exports = VerificationRequest;