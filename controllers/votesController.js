const express = require('express')
const db = require('../config/database')
const Vote = require('../models/Vote')
const Candidate = require('../models/Canditate.js')
class votesController {
    static setVote = async (req, res) =>{
        // TO DO: add a vote to candidate, verify if cpf is valid
        // insert in database a vote in the selected candidate
        let {cpf, candidateId} = req.body
        let verifiedCpf = cpf
        let cpfIsInDatabase = await Vote.count({ where: { CPF: verifiedCpf } })
        let seila = await Vote.findOne({ where: { CPF: verifiedCpf } })
        if(!cpfIsInDatabase){
            Vote.create({
                CPF: verifiedCpf,
                candidateId
            }).then(() =>
            Candidate.update({ votes: db.connection.literal('votes + 1') }, { where: { id: candidateId } })
            .then(()=> res.status(200).json({message: 'Voto contabilizado com sucesso!'})))
        }else{
            res.status(200).json(seila.candidateId)
        }
    }
}

module.exports = votesController