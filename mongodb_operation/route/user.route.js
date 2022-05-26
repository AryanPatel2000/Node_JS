
const express = require('express');
const router = express.Router();
const controller = require('../controller/user.controller');


class Userrouter {
    
    getRouter() {
        try{
            router.get('/', controller.checkApi);
            router.get('/getRecord',  controller.getRecord);
            router.post('/addRecord', controller.addRecord);
            router.put('/updateRecord/:id',controller.updateRecord);
            router.post('/searchRecord', controller.searchRecord);
            router.post('/pagiRecord',controller.pagiRecord);
            router.get('/sortRecord', controller.sortRecord);
        }catch(error) {
            console.log('Error::', error);
        }
        return router;
    }
}

module.exports = new Userrouter();

