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
    const html = await axios.get(url);
    console.log("HTML, ", html.data)
    fs.appendFileSync(process.env.GITHUB_OUTPUT, "found=" + found);

    
}

run()