function jourTravaille(date) {
    const jourNumeric = date.getDay();
    const jourText = date.toLocaleDateString("fr-FR", { weekday : 'long' });
    const month = date.toLocaleDateString("fr-Fr", { month : 'long'});
    const jourMois = date.getDate(); // Numéro du jour du mois
    const annee = date.getFullYear();
    
    const dateText = `${jourText} ${jourMois} ${month} ${annee}  est un`;

    let joursFeries = [
        "01/01/2024", "01/05/2024", "08/05/2024", "14/07/2024", 
        "15/08/2024", "01/11/2024", "11/11/2024", "25/12/2024"
    ];

    if (joursFeries.includes(date.toLocaleDateString())){
        console.log ("Le " + dateText + " jour férié.");
    } else if (jourNumeric === 6 || jourNumeric === 0){
        console.log ("Non, " + dateText + " week end.");
    } else {
        console.log ("Oui, " + dateText + " jour travaillé.");
    }
}

let dateList = [ '2025-01-01', '1934-12-25', '1967-11-11', '1974-04-12' ];

for (let date of dateList) jourTravaille(new Date(date));