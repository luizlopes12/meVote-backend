const express = require('express')
const Candidate = require('../models/Canditate.js')
class candidatesController {
    static getRanking = async (req, res) =>{
        // return candidates label and their votes
        let ranking = await Candidate.findAll({ order:[['votes', 'desc']] })
        res.status(200).json(ranking)
    }
    static getCandidates = async (req, res) =>{
        // return all candidates
        let allCandidates = await Candidate.findAll({})
        res.status(200).json(allCandidates)
    }
    static setCandidates = (req, res) =>{
        // Insert candidate into database 
        // obs: label = candidate name
        Candidate.create({
            label: req.body.candidateLabel
        }).then(()=>{
            res.status(200).json({message: `Candidato ${req.body.candidateLabel} adicionado com sucesso!`})
        })
    }
}

module.exports = candidatesController