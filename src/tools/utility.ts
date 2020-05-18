// utility.ts
    // miscellaneous system-helper functions

import fs from 'file-system'
import path from 'path'

// write data to external file
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

// calculate the absolute path for a file to be in compliance with Node readFile
// export function getAbsolutePath(relativeFilePath: string): string {
//     let p = path.join(__dirname, '..', )
// }

// print API request response to console
export function printResponse(err, data, resp): void {
    console.log(`error: ${err}`)
    console.log(`data: ${data}`)
    console.log(`response: ${resp}`)
}

// read in data from an external file
export function readData(fileName: string): Object {
    return fs.readFile(fileName, (err, data) => {
        if (err) throw err
        return JSON.parse(data)
    })
}
