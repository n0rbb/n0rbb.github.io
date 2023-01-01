function daysDifference($startDate, $endDate) {
    oneDay = 24*60*60*1000;
    return Math.ceil(($endDate.getTime() - $startDate.getTime()) / oneDay - 1) - 4;
}

function countig(){
    $startDateIg = new Date(2022, 11, 28);
    $today = new Date();
    document.getElementById("counterig").innerHTML = daysDifference($startDateIg, $today);
}
