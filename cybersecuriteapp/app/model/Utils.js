import fs from 'fs'

export async function getPageConfig(page) {
    let rawdata = fs.readFileSync(`views/pages/${page}/config.json`)
    return JSON.parse(rawdata);
}