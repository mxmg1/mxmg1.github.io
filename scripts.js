document.addEventListener("DOMContentLoaded", function () {
    const userHistoryContainer = document.getElementById("userHistoryContainer");
  
    fetch('https://osu.ppy.sh/p/api/')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Błąd zapytania do API osu! - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
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
        console.error("Błąd podczas pobierania danych z API osu!", error.message);
      });
  });
  