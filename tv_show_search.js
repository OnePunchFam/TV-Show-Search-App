// TV SHOW SEARCH APP


// API:
// http://api.tvmaze.com/search/shows?q=(queue you want to search)



const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const userSearch = form.elements.query.value
    const config = { params: { q: userSearch } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    displayImages(res.data)
    form.elements.query.value = '';
})



const displayImages = (shows) => {
    // create images for corresponding shows, append to page
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            // .show is coming from the API itself
            document.body.append(img);
        }

    }
}

