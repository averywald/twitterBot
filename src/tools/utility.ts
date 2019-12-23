var fs = require('fs')

module.exports = {
    export: (fileName: string, data: object): void => {
        fs.open(fileName, 'wx', (err) => {
            if (err) throw err
            fs.writeFileSync(fileName, JSON.stringify(data, null, 2), (err) => {
                if (err) throw err
            })
        })
    }
}