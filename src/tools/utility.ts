// utility.ts
    // miscellaneous system-helper functions

import fs from 'file-system'
import { exec } from 'child_process'

/**
 * @todo finish child process system config
 * @todo folder deletion capabilities
 * 
 * @param target the file or folder to delete
 * @returns void
 */
export function destroyCache(target?: string): void {
    // delete target
    if (target) {
        exec(`rm ${target}`, (error, stderr, stdout) => {

        })
    } 
    // delete the whole cache
    else {
        exec('rm -rf ./cache/*', (error, stderr, stdout) => {

        })
    }
}

/**
 * @param fileName relative file path to write to
 * @param data data to write to the file
 * @returns void
 */
export function exportData(fileName: string, data: object): void {
    fs.open(fileName, 'wx', (err) => {
        if (err) {
            if (err.code == 'EEXIST') {
                console.log('file already exists, overwriting...')
            }
        }
        fs.writeFileSync(fileName, JSON.stringify(data, null, 2), (err) => {
            if (err) throw err
        })
    })
}

/**
 * @param err error arising from API request failure
 * @param data data encapsulated
 * @param resp HTTP request response
 * @returns void
 */
export function printResponse(err, data, resp): void {
    console.log(`error: ${err}`)
    console.log(`data: ${data}`)
    console.log(`response: ${resp}`)
}

// export function readData(fileName: string): Object {
//     return fs.readFile(fileName, (err, data) => {
//         if (err) throw err
//         return JSON.parse(data)
//     })
// }
