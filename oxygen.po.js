module.exports = {
    
    searchPage: {
        searchInput: 'id=searchInput',
        searchButton: 'id=searchButton'
    },
    
    search: (item) => {
        web.type(po.searchPage.searchInput, item)
        web.click(po.searchPage.searchButton)
    }
}