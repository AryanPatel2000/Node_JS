const path = require('path');
const UserModel = require('../model/user.model');

class Usercontroller {

    checkApi = (req, res, next) => {
        try{
            res.status(200).send({error:false, message:'API is working'})
        }catch( error )
        {
            console.log('Error', error);
        }
       
    }

    getRecord = (req, res, next) => {
        try{
            UserModel.find({}, (err, docs) => {
                if(err) {
                    
                    res.status(500).send({error:true, message:err});

                }else{
                 
                    res.status(200).send({error:false, res:docs, message:'Records found'});
                }
            })
        }catch(error) {
            console.log('Error', error);
        }
    }

    sortRecord = (req, res, next) => {
        try{
            UserModel.find({}).sort({name: -1}).exec((err, docs) => {
                if(err) {
                   
                    res.status(500).send({error:true, message:err});
                }else{
                   
                    res.status(200).send({error:false, res:docs, message:'Records found'});
                }
            })
        }catch(error) {
            console.log('Error', error);
        }
    }
    addRecord = (req, res, next) => {
        try{
            if(!req.body) {
               
                res.status(500).send({error:true, message:'No input found', res:err});
            }else{
                const userRecord = new UserModel(req.body);
                userRecord.save((err, docs) => {
                    if(err) {
                       
                        res.status(500).send({error:true, message:err});
                    }else{
                       
                        res.status(200).send({status:'Success', message:'Successfully added the record', res:docs});
                    }
                    
                })
            }
        }catch(error) {
            console.log('Error', error);
        }
    }

    updateRecord = (req, res, next) => {
        try{
            if(!req.body) {
               
                res.status(500).send({status:'error', message:'No input found.'});
            }else if(!req.params.id){
               
                res.status(500).send({status:'error', message:'Send ID to update the record'});
            }else{

                UserModel.findByIdAndUpdate(req.params.id, req.body, (err, docs) => {
                    if(err) {
                        
                        res.status(500).send({status:'error', message:'Error occured while updating record into DB.', res:err});
                    }else{
                        
                        res.status(200).send({status:'Success', message:'Successfully updated the record', res:docs});
                    }
                })
            }
        }catch(error) {
            console.log('Error', error);
        }
    }

    searchRecord = (req, res, next) => {
        try{
            if(!req.body) {
                
                res.status(500).send({status:'error', message:'Input is missing'});
            }else{
                //exact match

                UserModel.find({name:{$regex:`^${req.body.search.text.trim()}`, $options: 'i'}}, (err, docs) => {
                    if(err) {
                       
                        res.status(500).send({status:'error', message:'Input is missing'});
                    }else{
                        
                        res.status(200).send({status:'Success', message:'Record found.', res:docs});
                    }
                })
            }
        }catch(error) {
            console.log('Error::', error);
        }
    }

    pagiRecord = (req, res, next) => {
        try{
            if(!req.body) {
               
                res.status(500).send({status:'error', message:'Input is missing'});
            }else{
                //pagination
                // page number
                // no of records

                const currentPage = req.body.currentPage;//2
                const pageSize = req.body.pageSize; //10

                const skip = pageSize * (currentPage-1);
                const limit = pageSize;

                UserModel.find({}).skip(skip).limit(limit).exec((err, docs) =>{
                    if(err) {
                       
                        res.status(500).send({status:'error', message:'Input is missing'});
                    }else{
                        
                        res.status(200).send({status:'Success', message:'Record found.', res:docs});
                    }
                })
            }
        }catch(error) {
            console.log('Error::', error);
        }
    }



}
module.exports = new Usercontroller();