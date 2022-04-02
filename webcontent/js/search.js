let mainSearch = document.querySelector('#mainSearch');
let mainSearchBtn = document.querySelector('#mainSearch-btn');

// Press '/' for foucus on Search
document.body.addEventListener("keyup", function (event) {
    if (event.keyCode === 191) {
        event.preventDefault();
        document.getElementById("mainSearch").focus();
    }
});

// Press 'Enter' for search 
mainSearch.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        mainSearchBtn.click();
    }
});


// Exact Book Search by '*'.
let preURL = 'books/';
mainSearch.addEventListener('keyup', function () { checkURL(); showSuggestion(); });
mainSearchBtn.addEventListener('click', function () { checkURL() });
function checkURL() {
    mainSearchValue = mainSearch.value
    if (mainSearchValue[0] == '*') {
        let url = mainSearchValue.replace('*', '')
        url = preURL + url
        function urlRedirect() {
            window.location.href = url;
        }
        mainSearchBtn.addEventListener('click', function () {
            urlRedirect()
        })
    }
}

function showSuggestion() {
    document.querySelector('#mainSearch').style = "color:red;"
    // console.log(document.querySelector('#mainSearch'));
    
}




