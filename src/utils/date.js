export const humanize = (date) => {
    const monthNames = [
        "Janeiro", "Fevereiro", "Março",
        "Abri", "Maio", "Junho", "Julho",
        "Agosto", "Setembro", "Outubro",
        "Novembro", "Dezembro"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return day + ' de ' + monthNames[monthIndex] + ' de ' + year
}