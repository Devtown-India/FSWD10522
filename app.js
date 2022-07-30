const app_id = "286bc7ab"
const app_key = "8a9fe54fcadb987652e0c8ccaa10662c"

const query = document.querySelector('header.search input')
const search = document.querySelector('header.search button')
const container = document.querySelector('.recipies')

const handleSearch = async ()=>{
    try {
        container.innerHTML = ''
        const endpoint = `https://api.edamam.com/search?q=${query.value}&app_id=${app_id}&app_key=${app_key}`
        const response = await fetch(endpoint)
        const {hits} = await response.json()

        hits.map(({recipe})=>{
            console.log(recipe)
            const {image, label, url,calories} = recipe
            const ele = document.createElement('div')
            ele.innerHTML = `
            <div class="recipe">
                <h2>${label}</h2>
                <img src="${image}" width="150px" alt="${label}">
                <h3>${calories}</h3>
                <a href="${url}" target="_blank">View Recipe</a>
            </div>
            `
            container.appendChild(ele)
        })

    } catch (error) {
        console.log(error)
    }
}

search.addEventListener('click',handleSearch)
