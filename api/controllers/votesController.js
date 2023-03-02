const express = require('express')
const db = require('../config/database')
const Vote = require('../models/Vote')
const Candidate = require('../models/Canditate')
class votesController {
    static setVote = async (req, res) =>{
        let {cpf, candidateId} = req.body
        let cpfIsInDatabase = await Vote.count({ where: { CPF: cpf } })
        if(!cpfIsInDatabase){
            Vote.create({
                CPF: cpf,
                candidateId
            }).then(() =>
            Candidate.update({ votes: db.connection.literal('votes + 1') }, { where: { id: candidateId } })
            .then(()=> res.status(200).json({message: 'Voto contabilizado com sucesso!'})))
        }else{
            res.status(200).json({message: 'Você já votou'})
        }
    }
    static getVote = async (req, res) =>{
        let {cpf} = req.params
        let isInDatabase = await Vote.findOne({ where: { CPF: cpf } })
        res.status(200).json(isInDatabase)
    }  
}

module.exports = votesController