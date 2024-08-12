console.log('hello');
const axios = require('axios')
const fs = require('fs');


let fakeData = [];
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const fetchData = async () => {

    try {
        const data = await axios.get('https://randomuser.me/api/?results=100');
        //use map push object in data array
        data.data.results.map((item) => {
            fakeData.push({ id: generateRandomNumber(1, 100), name: item.name, gendere: item.gender, email: item.email, picture: item.picture.large });
        })
        //console.log(fakeData);
        const jsonData = JSON.stringify(fakeData, null, 2);

        fs.writeFile('output.json', jsonData, (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('File has been written successfully');
            }
        });



    }
    catch (e) {
        console.log(e);

    }
}

fetchData();