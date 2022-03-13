const express = require('express');
const connection = require('../connection');
const router = express.Router();

//Create staff
router.post('/create',(req,res,next)=>{
    let staff = req.body;
    query = "insert into staff (staffName, companyId) values (?,?)"
    connection.query(query,[staff.staffName,staff.companyId],(err,results)=>{
        if(!err){
            return res.status(200).json({message:"Staff Added Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

//Read or retrieve all staff 
router.get('/read',(req,res,next)=>{
    query = "select * from staff";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    })
})

//Modify staff from company to another company
router.patch('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let staff = req.body;
    var query = "update staff set companyId=? where staffId=?";
    connection.query(query,[staff.companyId,id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(400).json({message:"Staff id does not exists"});
            }
            return res.status(200).json({message:"Staff Updated"});
        }
        else{
            return res.status(500).json(err)   
        }
    })
})

//Delete staff
router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var query = "delete from staff where staffId=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(400).json({message:"Staff id does not exists"});
            }
            return res.status(200).json({message:"Staff Deleted"});
        }
        else{
            return res.status(500).json(err)   
        }
    })
})

module.exports= router;