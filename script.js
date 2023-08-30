const searchInput = document.getElementById('searchInput');
const printerList = document.getElementById('printerList');
const printers = printerList.getElementsByClassName('printer');

function sortPrintersAlphabetically() {
    const printerArray = Array.from(printers);

    printerArray.sort((a, b) => {
        const nameA = a.querySelector('.printer-name').textContent.toLowerCase();
        const nameB = b.querySelector('.printer-name').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
    });

    for (const printer of printerArray) {
        printerList.appendChild(printer);
    }
}

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();

    for (const printer of printers) {
        const printerName = printer.querySelector('.printer-name').textContent.toLowerCase();
        const printerToner = printer.querySelector('.printer-toner').textContent.toLowerCase();

        if (printerName.includes(searchTerm) || printerToner.includes(searchTerm)) {
            printer.style.display = 'block';
        } else {
            printer.style.display = 'none';
        }
    }
});

// Chame a função de ordenação inicialmente
sortPrintersAlphabetically();
