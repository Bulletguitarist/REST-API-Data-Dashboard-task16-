const userList = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const errorMessage = document.getElementById("errorMessage");
const pageInfo = document.getElementById("pageInfo");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let users = [];
let currentPage = 1;
const itemsPerPage = 4;

// ==========================
// FETCH DATA
// ==========================
async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        users = await response.json();
        renderUsers();

    } catch (error) {
        errorMessage.textContent = "Error loading data. Please try again.";
    }
}

// ==========================
// RENDER USERS
// ==========================
function renderUsers() {

    userList.innerHTML = "";

    let filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    if (sortSelect.value) {
        filteredUsers.sort((a, b) =>
            a[sortSelect.value].localeCompare(b[sortSelect.value])
        );
    }

    const start = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers.slice(start, start + itemsPerPage);

    paginatedUsers.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Company:</strong> ${user.company.name}</p>
        `;

        userList.appendChild(card);
    });

    pageInfo.textContent = `Page ${currentPage}`;
}

// ==========================
// EVENT LISTENERS
// ==========================
searchInput.addEventListener("input", () => {
    currentPage = 1;
    renderUsers();
});

sortSelect.addEventListener("change", renderUsers);

nextBtn.addEventListener("click", () => {
    currentPage++;
    renderUsers();
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderUsers();
    }
});

fetchUsers();
