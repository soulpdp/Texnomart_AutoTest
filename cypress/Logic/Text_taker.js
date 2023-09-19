// class TextTaker {
//      getTextByXPath(xpath) {
//          cy.xpath(xpath)
//             .invoke('text')
//             .then((text) => {
//                 return text;
//             });
//     }
// }
//
// export default TextTaker;

// export async function TextTaker(path) {
//     const res = await  cy.xpath(path).invoke('text')
//         // .then((text) => text); // Return the text directly
//     console.log('ridding', res)
//     return res
// }


// function someFunction() {
//     TextTaker("your-xpath-selector").then((word) => {
//         alert(word); // Alert the extracted text
//         alert(typeof word); // Alert the type of the extracted text
//     });
// }

export function TextTaker(yol) {
    cy.xpath(yol)
        .invoke('text')
        .then((text) => {
            const jsonData = { "data": text };
            const jsonContent = JSON.stringify(jsonData);

            // Use cy.writeFile directly without cy.then
            cy.writeFile('output.json', jsonContent);


        });
}


