let i=1;
const data = [
[i++, "Abhishek", "18212391", "./data/Abhishek_18212391/1.bmp", "./data/Abhishek_18212391/2.bmp", "./data/Abhishek_18212391/3.bmp", "./data/Abhishek_18212391/4.bmp", "./data/Abhishek_18212391/5.bmp"],
[i++, "Abhishek Kumar", "34587507", "./data/AbhishekKumar_34587507/1.bmp", "./data/AbhishekKumar_34587507/2.bmp", "./data/AbhishekKumar_34587507/3.bmp", "./data/AbhishekKumar_34587507/4.bmp", "./data/AbhishekKumar_34587507/5.bmp"],
[i++, "Ajeet Chaurasiya", "60036420", "./data/AjeetChaurasiya_60036420/1.bmp", "./data/AjeetChaurasiya_60036420/2.bmp", "./data/AjeetChaurasiya_60036420/3.bmp", "./data/AjeetChaurasiya_60036420/4.bmp", "./data/AjeetChaurasiya_60036420/5.bmp"],
[i++, "Ajeet Pratap Yadav", "27206527", "./data/AjeetPratapYadav_27206527/1.bmp", "./data/AjeetPratapYadav_27206527/2.bmp", "./data/AjeetPratapYadav_27206527/3.bmp", "./data/AjeetPratapYadav_27206527/4.bmp", "./data/AjeetPratapYadav_27206527/5.bmp"],
[i++, "Anil Vishwakarma", "48723973", "./data/AnilVishwakarma_48723973/1.bmp", "./data/AnilVishwakarma_48723973/2.bmp", "./data/AnilVishwakarma_48723973/3.bmp", "./data/AnilVishwakarma_48723973/4.bmp", "./data/AnilVishwakarma_48723973/5.bmp"],
[i++, "Ashok Kumar", "59468941", "./data/AshokKumar_59468941/1.bmp", "./data/AshokKumar_59468941/2.bmp", "./data/AshokKumar_59468941/3.bmp", "./data/AshokKumar_59468941/4.bmp", "./data/AshokKumar_59468941/5.bmp"],
[i++, "ASHUTOSH MISHRA", "78150148", "./data/ASHUTOSHMISHRA_78150148/1.bmp", "./data/ASHUTOSHMISHRA_78150148/2.bmp", "./data/ASHUTOSHMISHRA_78150148/3.bmp", "./data/ASHUTOSHMISHRA_78150148/4.bmp", "./data/ASHUTOSHMISHRA_78150148/5.bmp"],
[i++, "Atul Yadav", "51743501", "./data/AtulYadav_51743501/1.bmp", "./data/AtulYadav_51743501/2.bmp", "./data/AtulYadav_51743501/3.bmp", "./data/AtulYadav_51743501/4.bmp", "./data/AtulYadav_51743501/5.bmp"],
[i++, "Trainer Deepika Kumari", "84713150", "./data/DeepikaKumari_84713150/1.bmp", "./data/DeepikaKumari_84713150/2.bmp", "./data/DeepikaKumari_84713150/3.bmp", "./data/DeepikaKumari_84713150/4.bmp", "./data/DeepikaKumari_84713150/5.bmp"],
[i++, "Dev Vishwakarma", "97705962", "./data/DevVishwakarma_97705962/1.bmp", "./data/DevVishwakarma_97705962/2.bmp", "./data/DevVishwakarma_97705962/3.bmp", "./data/DevVishwakarma_97705962/4.bmp", "./data/DevVishwakarma_97705962/5.bmp"],
[i++, "Govind Chauhan", "94231964", "./data/GovindChauhan_94231964/1.bmp", "./data/GovindChauhan_94231964/2.bmp", "./data/GovindChauhan_94231964/3.bmp", "./data/GovindChauhan_94231964/4.bmp", "./data/GovindChauhan_94231964/5.bmp"],
[i++, "Karan Deep", "37951259", "./data/KaranDeep_37951259/1.bmp", "./data/KaranDeep_37951259/2.bmp", "./data/KaranDeep_37951259/3.bmp", "./data/KaranDeep_37951259/4.bmp", "./data/KaranDeep_37951259/5.bmp"],
[i++, "Karan Maurya", "33640653", "./data/KaranMaurya_33640653/1.bmp", "./data/KaranMaurya_33640653/2.bmp", "./data/KaranMaurya_33640653/3.bmp", "./data/KaranMaurya_33640653/4.bmp", "./data/KaranMaurya_33640653/5.bmp"],
[i++, "KM.GURIYA", "93705003", "./data/KM.GURIYA_93705003/1.bmp", "./data/KM.GURIYA_93705003/2.bmp", "./data/KM.GURIYA_93705003/3.bmp", "./data/KM.GURIYA_93705003/4.bmp", "./data/KM.GURIYA_93705003/5.bmp"],
[i++, "Maaz Ahmad", "65050563", "./data/MaazAhmad_65050563/1.bmp", "./data/MaazAhmad_65050563/2.bmp", "./data/MaazAhmad_65050563/3.bmp", "./data/MaazAhmad_65050563/4.bmp", "./data/MaazAhmad_65050563/5.bmp"],
[i++, "Mh Aftab Alam", "41537026", "./data/MhAftabAlam_41537026/1.bmp", "./data/MhAftabAlam_41537026/2.bmp", "./data/MhAftabAlam_41537026/3.bmp", "./data/MhAftabAlam_41537026/4.bmp", "./data/MhAftabAlam_41537026/5.bmp"],
[i++, "Mohd Raoof", "31136921", "./data/MohdRaoof_31136921/1.bmp", "./data/MohdRaoof_31136921/2.bmp", "./data/MohdRaoof_31136921/3.bmp", "./data/MohdRaoof_31136921/4.bmp", "./data/MohdRaoof_31136921/5.bmp"],
[i++, "NITISH GUPTA", "93491560", "./data/NITISHGUPTA_93491560/1.bmp", "./data/NITISHGUPTA_93491560/2.bmp", "./data/NITISHGUPTA_93491560/3.bmp", "./data/NITISHGUPTA_93491560/4.bmp", "./data/NITISHGUPTA_93491560/5.bmp"],
[i++, "Priya Gupta", "32775501", "./data/PriyaGupta_32775501/1.bmp", "./data/PriyaGupta_32775501/2.bmp", "./data/PriyaGupta_32775501/3.bmp", "./data/PriyaGupta_32775501/4.bmp", "./data/PriyaGupta_32775501/5.bmp"],
[i++, "Priyanshu Chauhan", "94322791", "./data/PriyanshuChauhan_94322791/1.bmp", "./data/PriyanshuChauhan_94322791/2.bmp", "./data/PriyanshuChauhan_94322791/3.bmp", "./data/PriyanshuChauhan_94322791/4.bmp", "./data/PriyanshuChauhan_94322791/5.bmp"],
[i++, "Rajdeep Dubey", "56021098", "./data/RajdeepDubey_56021098/1.bmp", "./data/RajdeepDubey_56021098/2.bmp", "./data/RajdeepDubey_56021098/3.bmp", "./data/RajdeepDubey_56021098/4.bmp", "./data/RajdeepDubey_56021098/5.bmp"],
[i++, "Sagar Yadav", "33609397", "./data/SagarYadav_33609397/1.bmp", "./data/SagarYadav_33609397/2.bmp", "./data/SagarYadav_33609397/3.bmp", "./data/SagarYadav_33609397/4.bmp", "./data/SagarYadav_33609397/5.bmp"],
[i++, "Sakshi", "97669711", "./data/Sakshi_97669711/1.bmp", "./data/Sakshi_97669711/2.bmp", "./data/Sakshi_97669711/3.bmp", "./data/Sakshi_97669711/4.bmp", "./data/Sakshi_97669711/5.bmp"],
[i++, "Satya Prakash Maurya", "53623098", "./data/SatyaPrakashMaurya_53623098/1.bmp", "./data/SatyaPrakashMaurya_53623098/2.bmp", "./data/SatyaPrakashMaurya_53623098/3.bmp", "./data/SatyaPrakashMaurya_53623098/4.bmp", "./data/SatyaPrakashMaurya_53623098/5.bmp"],
[i++, "Shalu", "65599409", "./data/Shalu_65599409/1.bmp", "./data/Shalu_65599409/2.bmp", "./data/Shalu_65599409/3.bmp", "./data/Shalu_65599409/4.bmp", "./data/Shalu_65599409/5.bmp"],
[i++, "Shashikant Tiwari", "49526689", "./data/ShashikantTiwari_49526689/1.bmp", "./data/ShashikantTiwari_49526689/2.bmp", "./data/ShashikantTiwari_49526689/3.bmp", "./data/ShashikantTiwari_49526689/4.bmp", "./data/ShashikantTiwari_49526689/5.bmp"],
[i++, "Shivani Vaishya", "83459463", "./data/ShivaniVaishya_83459463/1.bmp", "./data/ShivaniVaishya_83459463/2.bmp", "./data/ShivaniVaishya_83459463/3.bmp", "./data/ShivaniVaishya_83459463/4.bmp", "./data/ShivaniVaishya_83459463/5.bmp"],
[i++, "Shiwangi Diwedi", "41942954", "./data/ShiwangiDiwedi_41942954/1.bmp", "./data/ShiwangiDiwedi_41942954/2.bmp", "./data/ShiwangiDiwedi_41942954/3.bmp", "./data/ShiwangiDiwedi_41942954/4.bmp", "./data/ShiwangiDiwedi_41942954/5.bmp"],
[i++, "Shubham Mishra", "85877510", "./data/ShubhamMishra_85877510/1.bmp", "./data/ShubhamMishra_85877510/2.bmp", "./data/ShubhamMishra_85877510/3.bmp", "./data/ShubhamMishra_85877510/4.bmp", "./data/ShubhamMishra_85877510/5.bmp"],
[i++, "Sushma", "52948706", "./data/Sushma_52948706/1.bmp", "./data/Sushma_52948706/2.bmp", "./data/Sushma_52948706/3.bmp", "./data/Sushma_52948706/4.bmp", "./data/Sushma_52948706/5.bmp"],
[i++, "Vineet Kumar", "14890466", "./data/VineetKumar_14890466/1.bmp", "./data/VineetKumar_14890466/2.bmp", "./data/VineetKumar_14890466/3.bmp", "./data/VineetKumar_14890466/4.bmp", "./data/VineetKumar_14890466/5.bmp"],

];

let currentSortColumn = -1; // Initially, no column is sorted
let isAscending = true; // Initially, sorting is in ascending order

document.addEventListener('DOMContentLoaded', function () {
    renderTable(data);
    
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        const filteredData = data.filter(row => row.some(cell => cell.toString().toLowerCase().includes(searchTerm)));
        renderTable(filteredData);
    });

    const contrastRange = document.getElementById('contrast');
    contrastRange.addEventListener('input', function () {
        const contrastValue = this.value;
        document.querySelector('.contrast-value').textContent = `${contrastValue}%`;
        updateImageContrast(contrastValue);
    });
});

function renderTable(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    data.forEach(row => {
        const tr = document.createElement('tr');

        row.forEach((cell, index) => {
            const td = document.createElement('td');

            if (index >= 3 && index <= 7) {
                const img = document.createElement('img');
                img.src = cell;
                img.alt = `Finger ${index - 1}`;
                img.style.width = '100px'; // Set width to auto for actual size
                img.style.height = '100px'; // Set height to auto for actual size
                img.style.transform = 'scaleX(-1)'; // Mirror horizontally
                img.style.filter = `invert(100%) contrast(${document.getElementById('contrast').value}%)`; // Color invert and apply contrast
                td.appendChild(img);
            } else {
                td.textContent = cell;
            }

            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });

    updateTotalCount(data.length);
}

function updateImageContrast(contrastValue) {
    const images = document.querySelectorAll('td img');
    images.forEach(img => {
        img.style.filter = `invert(100%) contrast(${contrastValue}%)`;
    });
}

function updateTotalCount(count) {
    const totalCountElement = document.getElementById('totalCount');
    totalCountElement.textContent = `Total Count: ${count}`;
}

function sortTable(columnIndex) {
    if (currentSortColumn === columnIndex) {
        // If the same column is clicked again, reverse the sorting order
        isAscending = !isAscending;
    } else {
        // If a new column is clicked, set the sorting order to ascending
        isAscending = true;
        currentSortColumn = columnIndex;
    }

    data.sort((a, b) => {
        const valueA = a[currentSortColumn];
        const valueB = b[currentSortColumn];

        // Customize the comparison logic based on the data type (string, number, etc.)
        return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
    });

    renderTable(data);
}
