function daysDifference($startDate, $endDate) {
    oneDay = 24*60*60*1000;
    return Math.ceil(($endDate.getTime() - $startDate.getTime()) / oneDay - 1);
}

function count() {
    $startDateTw = new Date(2023, 10, 8);
    $today = new Date();
    document.getElementById("counter").innerHTML = daysDifference($startDateTw, $today);
}

function loss() {
    alert("Friendly reminder that you may be playing THE GAME.")
}
