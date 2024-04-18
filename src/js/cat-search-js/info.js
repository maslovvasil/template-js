integrationData.forEach(function (item) {
  const selectHTML = `<div class="row container-integration-type__row">
              <div class="col-3 d-flex flex-column">
                <label class="integrationTypeLabel" for="integrationType"></label>
                <select id="integrationType" class="integrationType">
                  <option class="integration-type-option">${item.integrationType}</option>
                </select>
              </div>
            </div>`
  selectWrapper.insertAdjacentHTML('beforeend', selectHTML)
})

// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="utf-8">
//   <meta name="viewport" content="width=device-width">
//   <title>Example of using theCatAPI.com to show a grid of cropped Kitties</title>
//   <link rel="stylesheet" href="css/cat-search.css" />
// </head>
// <body>
//      <p><a href="index.html">Go back</a></p>
// <div class="maincontent">
//     <select class="breed-select"></select>
//   <div id="grid" class="imgrid"></div>
//  </div>
//  <script src="js/cat-search-js/index.js" type="module"></script>
// </body>
// </html>

const selector = document.querySelector('.breed-select')
const divCatInfo = document.querySelector('.cat-info')

let allBreedsId = []

fetchBreeds()
  .then(data => {

    data.forEach(element => {
      allBreedsId.push({ text: element.name, value: element.id })
    })
    console.log(allBreedsId)

    allBreedsId.forEach(element => {
      const option = document.createElement('option')
      option.value = element.value
      option.text = element.text
      selector.appendChild(option)
    })
  })
  .catch(onFetchError)
