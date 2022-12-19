'use strict';
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const axios = require('axios');

async function run() {
    let found = false
    const url = core.getInput('url');
    const search = core.getInput('search');
    console.log(`url: ${url} -- search: ${search}`)
    const response = await axios.get(url);
    let html = response.data
    found = html.includes(search)
    console.log("HTML, ", response.data)
    fs.appendFileSync(process.env.GITHUB_OUTPUT, "found=" + found);

    
}

run()