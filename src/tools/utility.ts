var fs = require('fs')

module.exports = {
    // write data to external file
    export: (fileName: string, data: object): void => {
        fs.open(fileName, 'wx', (err) => {
            if (err) throw err
            fs.writeFileSync(fileName, JSON.stringify(data, null, 2), (err) => {
                if (err) throw err
            })
        })
    },
    // print API request response to console
    printResponse: (err, data, resp): void => {
        console.log(`error: ${err}`)
        console.log(`data: ${data}`)
        console.log(`response: ${resp}`)
    }
}