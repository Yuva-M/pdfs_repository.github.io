// search.js

function searchPDF() {
    let input = document.getElementById('searchbar').value.toLowerCase();
    let pdfItems = document.querySelectorAll('.pdf-items .pdf');

    pdfItems.forEach(item => {
        let itemName = item.textContent.toLowerCase();
        if (!itemName.includes(input)) {
            item.style.display = "none";
        } else {
            item.style.display = "list-item";
        }
    });
}
