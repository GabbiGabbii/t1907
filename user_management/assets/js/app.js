const apiUrl = "https://reqres.in/api/users";
const userDisplayNode = document.getElementById("users");

const fetchUsers = async (page) => {
  let data = await (await fetch(apiUrl + `?page=${page}&per_page=3`)).json(); //json tar in externa objeckt och gör om de till javascript object
  return data;
};

const fetchPage = (page) => {
  fetchUsers(page).then((response) => {
    userDisplayNode.innerHTML = "";
    displayUsers(response);
    displayNavigation(response);
  });
};
const displayNavigation = (response) => {
  let { page, total_pages } = response;
  
  let buttonsDisplay = document.createElement("div");
  let prevLink = page > total_pages/total_pages ? `<button onclick="fetchPage(${page - 1})"><<</button>` : "";
  let nextLink = page < total_pages  ? `<button onclick="fetchPage(${page + 1})">>></button>` : "";
  buttonsDisplay.innerHTML = prevLink + nextLink;
  userDisplayNode.appendChild(buttonsDisplay);
};

const displayUsers = (response) => {
  response.data.forEach((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("grid-item");
    let html = `<h2> ${user.first_name} </h2>`;
    html += `<img src="${user.avatar}" />`;
    html += `<p><a href="mailto:${user.email}"> ${user.email} </a></p>`;
    userDiv.innerHTML = html;
    userDisplayNode.appendChild(userDiv);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  userDisplayNode.classList.add("grid-container");
  fetchPage();
});

//});
//});
//});  // DOMContentLoaded är ett ecent som triggas igång när hela sidan är färdigladda i browsern
