// Zapytanie do API osu! w celu pobrania informacji o użytkowniku
fetch('https://osu.ppy.sh/api/v2/users/5707541/osu', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(data => {
    const userHistoryContainer = document.getElementById("userHistoryContainer");

    const userAccountHistoryData = data.userHistory;

    userAccountHistoryData.forEach(item => {
        const historyItem = document.createElement("div");
        historyItem.classList.add("userHistoryItem");

        const timestamp = new Date(item.timestamp).toLocaleString();

        historyItem.innerHTML = `
            <h3>${item.type}</h3>
            <p>${item.description}</p>
            <p>Timestamp: ${timestamp}</p>
            <p>Length: ${item.length} seconds</p>
            <p>Permanent: ${item.permanent ? "Yes" : "No"}</p>
        `;

        userHistoryContainer.appendChild(historyItem);
    });
})
.catch(error => {
    console.error("Błąd podczas pobierania danych z API osu!", error);
});
