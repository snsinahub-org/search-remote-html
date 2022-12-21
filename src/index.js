'use strict';
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const axios = require('axios');
const axiosRetry = require('axios-retry');

async function run() {
    let found = false
    const url = core.getInput('url');
    const search = core.getInput('search');
    console.log(`url: ${url} -- search: ${search}`);
    axiosRetry(axios, { retries: 3 });
    const response = await axios.get(url);
    let html = response.data
    found = html.includes(search)
    console.log("HTML, ", response.data)
    fs.appendFileSync(process.env.GITHUB_OUTPUT, "found=" + found);

    
}

run()