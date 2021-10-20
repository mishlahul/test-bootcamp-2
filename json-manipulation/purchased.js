const fs = require('fs')

const path = 'data.json'
const findItems = () => {
    fs.readFile(path, (err, data) => {
        if (err) console.log(err)
        let parsedData = JSON.parse(data)
        let items = []
        for(i=0; i<parsedData.length; i++) {
            let category = parsedData[i]
            let timestamp = category.purchased_at
            var dmy = new Date(timestamp * 1000)
            var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            var year = dmy.getFullYear();
            var month = months[dmy.getMonth()];
            var date = dmy.getDate();
            if(year==2020 && month=='Jan' && date==16) {
                items.push(category.name)
            }
        }
        console.log(items)
    })
}
findItems()