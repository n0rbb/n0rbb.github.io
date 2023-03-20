function daysDifference($startDate, $endDate) {
    oneDay = 24*60*60*1000;
    return Math.ceil(($endDate.getTime() - $startDate.getTime()) / oneDay - 1);
}

function countig(){
    $startDateIg = new Date(2023, 2, 20);
    $startDateXen = new Date(2023, 0, 4);
    $today = new Date();

    document.getElementById("counterig").innerHTML = daysDifference($startDateIg, $today);
    document.getElementById("counterxen").innerHTML = daysDifference($startDateXen, $today);
}
