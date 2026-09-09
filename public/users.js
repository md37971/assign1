async function userListController() { //Background network function for fetching, using promises.
    let repsonse = await fetch('http://localhost:3000/user'); //The function we're returning is a promise.
    let user = await response.json(); //Gets response and converts it into json.

    userListView(users);
    return users;
}

function userListView(users) {
    //<table id="usertable"> - Retrieve a pointer to this table so that we can modify it.
    //We can get the element of the table by .getElementById();
    let table = document.getElementById("usertable");
    let view = `<thead><tr><th>User ID</th>` +
                        `<th>Last Name</th>` +
                        `<th>First Name</th>` +
                        `<th>Email</th>` +
                        `<th>Username</th>` +
                        `<th>Password</th></tr></thead>`;

    users.forEach(element => {
        view = view + 
        `<tbody><tr><td>${user['userID']}</td>` +
        `<tr><td>${user['lastname']}</td>` +
        `<tr><td>${user['firstname']}</td>` +
        `<tr><td>${user['email']}</td>` +
        `<tr><td>${user['username']}</td>` +
        `<tr><td>${user['password']}</td></tr></tbody>`;
    });

    table.innerHTML = view;
}