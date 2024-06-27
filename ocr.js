const Tesseract = require('tesseract.js');
const path = require('path');

// Path to your image
const imagePath = path.join(__dirname, './image/bill.jpeg');

// Array of language codes
const languages = ['lao']; // English, Lao

Tesseract.recognize(
    imagePath,
    languages.join('+'), // Join language codes with '+'
    // {
    //     logger: (m) => console.log(m),
    // }
)
    .then(({ data: { text } }) => {
        // if (text.includes("ລະກັດໂຕະ")) { console.log({ "table code": "JIDXIS" }) } else { console.log({ "table code": "Not detached" }) };

        // console.log('hocr:', hocr);
        // console.log('data:', data);
        console.log('Extracted text:', text);
        // console.log('Extracted text:', text[10]);
        // console.log('Extracted text:', text.slice(10, 27));
    })
    .catch((error) => {
        console.error('Error:', error);
    });
