const express = require('express');
const connection = require('../connection');
const router = express.Router();

//Create company
router.post('/create',(req,res,next)=>{
    let company = req.body;
    query = "insert into company (companyName) values (?)"
    connection.query(query,[company.companyName],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Company Added Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

//Retrieve or read company by ID
router.get('/read/:id',(req,res,next)=>{
    const id = req.params.id;
    query = "select * from company where companyId=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows==0){
                return res.status(400).json({message:"Company id does not exists"});
            }
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})


//Delete company
router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query = "delete from company where companyId=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(400).json({message:"Company id does not exists"});
            }
            return res.status(200).json({message:"Company Deleted"});
        }
        else{
            return res.status(500).json(err)   
        }
    })
})
module.exports = router;