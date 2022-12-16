'use strict';
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const axios = require('axios');

async function run() {
    let found = false
    const url = core.getInput('url');
    const search = core.getInput('search');
    axios.get(url)
         .then(function(response){
            console.log(response)
            fs.appendFileSync(process.env.GITHUB_OUTPUT, "found=" + found);
         })

    
}