const fs = require('fs')

const path = 'data.json'
const findItems = () => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err)
        let parsedData = JSON.parse(data)
        let items = []
        for(i=0; i<parsedData.length; i++) {
            let category = parsedData[i]
            let tags = category.tags
            for(j=0; j<tags.length; j++)
            if (tags[j] == "brown") {
                items.push(category.name)
            }
        }
        console.log(items)
    })
}
findItems()