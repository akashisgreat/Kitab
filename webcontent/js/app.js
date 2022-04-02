// let body = document.body;
// let themeColor = '#c9c4c4'
// function darkMode() {
//     body.classList.toggle("darkmode");
// };
// logo.addEventListener('dblclick', function () {
//     darkMode();
// });
// darkMode();





// Nav close-open function
let nav = document.querySelector('nav');
let main = document.querySelector('main');
let navBtn = document.querySelector('#navBtn')
navBtn.addEventListener('click', function () {
    nav.classList.toggle('open');
})
main.addEventListener('click', function () {
    nav.classList.remove('open');
})


// Inject Project Name
// let projectName = document.querySelectorAll('.projectName')
// projectName.forEach(element => {
//     element.innerHTML = 'Library'
//     element.href = 'https://google.com'
//     // element.target = '_blank'
// });


// Search

// const textContant = document.body
// function search() {
//     let miniSearchQuery = document.querySelector('#miniSearch').value
//     console.log(miniSearchQuery);
//     if (miniSearchQuery !== "") {
//         let regExp = new regExp(miniSearchQuery, "gi");
//         textContant.innerHTML = (textContant.textContant).replace(regExp, "<mark>$&</mark>")    
//     }
// }
// search()


// const p = document.body
// function search() {
//     let input = document.getElementById('miniSearch').value;
//     if (input !== "") {
//         let regExp = new regExp(input, "gi");
//         p.innerHTML = (p.textContent).replace(regExp, "<mark>$&</mark>");        
//     }
// }


// function search() {
//     let texToSearch = document.getElementById('miniSearch').value
//     let paragraph = document.querySelector('header')
//     console.log(texToSearch);
//     texToSearch = texToSearch.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
//     let pattern = new RegExp(`${texToSearch}`,"gi");
//     paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<mark>${match}</mark>`)
// }



// function search() {
//     var inputText = document.getElementById("inputText");
//     var innerHTML = inputText.innerHTML;
//     var index = innerHTML.indexOf(text);
//     if (index >= 0) { 
//      innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
//      inputText.innerHTML = innerHTML;
//     }
//   }

