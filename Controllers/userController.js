const express = require('express');
const db = require('../modules/db')

exports.getUser = (req,res) =>{
    let sql = `SELECT * FROM users`;
    db.query(sql,(err,result)=>{
        if(err) throw  err;
        res.send(result);
    })
}

exports.createUser = (req,res)=>{
    let num = { name : req.body.name , email : req.body.email };
    let sql = `INSERT INTO users SET ?`;
    db.query(sql,num,(err,result)=>{
        if(err) throw err;
        res.send('User added....')
    })
}

exports.getuserbyId = (req,res)=>{
   // let num = req.params.num;
    let sql = `SELECT * FROM users WHERE id = ?`;
    db.query(sql,[req.params.id],(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
}

exports.updateUser = (req,res)=>{
    let num1 = { name : req.body.name , email : req.body.email };
    let sql = `UPDATE users SET ? WHERE id = ?`;
    db.query(sql,[num1,req.params.id],(err,result)=>{
        if(err) throw err;
        res.send('Updated....')
    })
}

exports.deleteUser = (req,res)=>{
   // let num = req.params.id;
    let sql = `DELETE FROM users WHERE id = ?`;
    db.query(sql,[req.params.id],(err,result)=>{
        if(err) throw err;
        res.send('Deleted....')
    })
}

