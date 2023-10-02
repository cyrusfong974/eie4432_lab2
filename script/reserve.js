function selectTable(tableNumber) {
    const tableSelectMessage = document.getElementById("selected-table");

    tableSelectMessage.textContent =  "You are selecting: Table " + tableNumber;
}