'use strict';
const github = require('@actions/github');
const core = require('@actions/core');
const fs = require('fs');
const axios = require('axios');
const https = require('https');
const axiosRetry = require('axios-retry');

async function run() {
    let found = false
    const url = core.getInput('url');
    const search = core.getInput('search');
    const ignoreSSL = core.getInput('ignore-ssl');
    console.log(`url: ${url} -- search: ${search}`);
    let rejectUnauthorized = true
    if(ignoreSSL == 'true') {
        rejectUnauthorized = false
    }
    axiosRetry(axios, { retries: 3 });
    const instance = axios.create({
        httpsAgent: new https.Agent({  
          rejectUnauthorized: rejectUnauthorized
        })
      });
    // const response = await instance.get(url).catch(function(error){
    //     console.log("ERROR: ", JSON.stringify(error))
    // });
    const response = await instance.get(url, {validateStatus: () => true});
    // console.log("RESPONSE: ", JSON.stringify(response.statusCode))
    console.log("RESPONSE: ", response)
    
    if(response.status != 200) {
        found = 'false'
    } else {
        let html = response.data
        found = html.includes(search)
    }
    // console.log("HTML, ", response.data)
    // fs.appendFileSync(process.env.GITHUB_OUTPUT, "\\nfound=" + found);
    // fs.appendFileSync(process.env.GITHUB_OUTPUT, "\\nhttpStatusCode=" + response.status);
    core.setOutput("found", found);
    core.setOutput("httpStatusCode", response.status);

    
}

run()