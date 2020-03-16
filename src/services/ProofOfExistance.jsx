const stringify = require("canonicalize-json").stringify;
const axios = require("axios");
const sha256 = require("sha256");
var Base64 = require('js-base64').Base64;

// const sampleKnowledgeID = "a7f0f8250de51bb26e07279a49999f04f23243031e5a38fa192998e2819fb02e"     // for testing purposes
// const knowledgeID = "a7f0f8250de51bb26e07279a49999f04f23243031e5a38fa192998e2819fb02e"     // for testing purposes

const GetKnowledgeURL = `https://jigsaw-server.herokuapp.com/api/article/get/`
const GetContributionsUrl = `https://jigsaw-server.herokuapp.com/api/article/getContributions/`;


async function retrieveKnowledgeFromJigsaw(knowledgeID) {
    try {
        //get knowledge data
        const res = await axios.get(GetKnowledgeURL + knowledgeID);
        if (res != null) {
            // console.log(res.data.knowledge)
            return res.data.knowledge

        }
        return null
    } catch (e) {
        return null
        console.log(e)
    }
}

async function retrieveContributionsFromJigsaw(knowledgeID) {
    try {
        //get knowledge data
        const res = await axios.get(GetContributionsUrl + knowledgeID);
        if (res != null) {
            // console.log(res.data.contributions)
            return res.data.contributions
        }
        return null
    } catch (e) {
        console.log(e)
        return null
    }
}


async function retrieveKnowledgeTxnHashFromStellar(id) {

}

async function retrieveContributionTxnHashFromStellar(id) {

}



async function proof(knowledgeID) {
    
}


//execute
proof(knowledgeID)          // pass in the knowledge ID here
