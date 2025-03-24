function createCalendar(elem, year) {
    // Mois et jours de la semaine
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const dayNames = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

    // Fonction pour créer un calendrier pour un mois et une année donnés
    const generateMonth = (month) => {
        const firstDay = new Date(year, month, 1); // Premier jour du mois
        const lastDay = new Date(year, month + 1, 0); // Dernier jour du mois

        let table = `<h3>${monthNames[month]} ${year}</h3>`;
        table += '<table class="table table-bordered"><thead><tr>';
        
        // Ajouter les jours de la semaine
        for (let i = 0; i < dayNames.length; i++) {
            table += `<th>${dayNames[i]}</th>`;
        }
        table += '</tr></thead><tbody>';

        // Créer les semaines du mois
        let row = '<tr>';
        // Remplir les premiers jours vides avant le premier jour du mois
        for (let i = 0; i < firstDay.getDay(); i++) {
            row += '<td></td>';
        }

        // Remplir les jours du mois
        for (let i = 1; i <= lastDay.getDate(); i++) {
            const currentDate = new Date(year, month, i);
            const dayOfWeek = currentDate.getDay();
            let isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Weekends (dimanche et samedi)

            if (row.length > 0 && dayOfWeek === 0) {
                table += row + '</tr>';
                row = '';
            }

            // Ajouter le jour dans la cellule
            row += `<td class="${isWeekend ? 'weekend' : ''} ${currentDate.toDateString() === new Date().toDateString() ? 'today' : ''}" 
                     ${isWeekend ? 'style="pointer-events: none; background-color: #f8d7da;"' : ''}>${i}</td>`;
        }

        // Compléter la dernière semaine avec des cellules vides
        while (row.length < 7) {
            row += '<td></td>';
        }

        table += row + '</tr></tbody></table>';

        return table;
    };

    // Générer le calendrier pour chaque mois de l'année
    let calendarHTML = '';
    for (let month = 0; month < 12; month++) {
        calendarHTML += generateMonth(month);
    }

    elem.innerHTML = calendarHTML;
}

// Appel de la fonction pour afficher le calendrier de l'année 2024
const calendarElem = document.getElementById('calendar');
createCalendar(calendarElem, 2025);  // Affichage de l'année 2024














