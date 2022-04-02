/* Header */
let header = document.querySelector('header');
let headerHTML = `
<section class="flex">
    <div id="logo" class="flex">
    <svg viewBox="50 90 300 150" xmlns="http://www.w3.org/2000/svg" width="52px">
        <defs>
            <linearGradient id="lgrad" x1="100%" y1="92%" x2="0%" y2="2%">
                <stop offset="25%" style="stop-color:rgb(154, 166, 170);stop-opacity:1.00" />
                <stop offset="45%" style="stop-color:rgb(133, 146, 149);stop-opacity:1.00" />
                <stop offset="45%" style="stop-color:rgb(168, 180, 184);stop-opacity:1.00" />
            </linearGradient>
        </defs>
        <rect x="100" y="100" width="200" height="120" stroke="#404244" rx="7" stroke-width="8" fill="url(#lgrad)" />
        <rect x="75" y="224" width="250" height="7" fill="#6b6d6f" rx="5" ry="5" />
        <rect x="75" y="224" width="250" height="3.5" fill="#a2a5a8" />
    </svg>
    <h2 class="projectName" style="padding: 0.4em;font-size: 1.3em;letter-spacing: 1px;">Library</h2>
    </div>
    <nav class="flex bradius">
        <a href="" class="bradius navitem">Home</a>
        <a href="" class="bradius navitem">Upload</a>
        <a href="" class="bradius navitem">Download</a>
        <a href="" class="bradius navitem">Books</a>
    </nav>
</section>
<section class="flex">
    <input type="search" placeholder="Search" id="miniSearch" class="shadow bradius" />
    <svg id="navBtn" class="bradius shadow flex" xmlns='http://www.w3.org/2000/svg' height='26'
        viewBox='0 0 24 24' width='22'>
        <rect x='2' y='1.5' width='21' height='3.5' rx='2' />
        <rect x='2' y='9.5' width='15' height='3.5' rx='2' fill='tomato' />
        <rect x='2' y='17.5' width='19' height='3.5' rx='2' />
    </svg>
</section>`;
header.classList.add('flex');
header.classList.add('shadow');
header.innerHTML = headerHTML;
/* For Different Nav Item href */
let navitem = {
    home: document.querySelectorAll('.navitem')[0],
    upload: document.querySelectorAll('.navitem')[1],
    download: document.querySelectorAll('.navitem')[2],
    books: document.querySelectorAll('.navitem')[3]
}
// e.g: navitem.uplaod.href = '/upload/'





/* Footer */
let footer = document.querySelector('footer');
let footerHTML = `
&copy; &nbsp;<a href="" class="projectName"></a>
Libary &nbsp; | &nbsp; <a href="#">Back to top</a>`;
footer.classList.add('flex');
footer.style.boxShadow = '#0000003d 0px -1px 8px';
footer.innerHTML = footerHTML;



