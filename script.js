const searchInput = document.getElementById('searchInput');
const printerList = document.getElementById('printerList').getElementsByClassName('printer');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    
    for (const printer of printerList) {
        const printerName = printer.querySelector('.printer-name').textContent.toLowerCase();
        const printerToner = printer.querySelector('.printer-toner').textContent.toLowerCase();
        
        if (printerName.includes(searchTerm) || printerToner.includes(searchTerm)) {
            printer.style.display = 'block';
        } else {
            printer.style.display = 'none';
        }
    }
});
