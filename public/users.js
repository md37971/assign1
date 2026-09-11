async function userListController() { //Background network function for fetching, using promises.
    let response = await fetch('http://localhost:3000/users'); //The function we're returning is a promise.
    let users = await response.json(); //Gets response and converts it into json.

    userListView(users);
    return users;
};

function userListView(users) {
    //<table id="usertable"> - Retrieve a pointer to this table so that we can modify it.
    //We can get the element of the table by .getElementById();
    let table = document.getElementById("usertable");
    let view = `<thead><tr><th>User ID</th>` +
                        `<th>Last Name</th>` +
                        `<th>First Name</th>` +
                        `<th>Email</th>` +
                        `<th>U-Role</th>` +
                        `<th>Username</th>` +
                        `<th>Password</th>` +
                        `<th>Last Modified</th></tr></thead>`;

    users.forEach(user => {
        view = view + 
        `<tbody><tr><td>${user['userID']}</td> ` +
        `<td>${user['lastname']}</td>` +
        `<td>${user['firstname']}</td>` +
        `<td>${user['email']}</td>` +
        `<td>${user['urole']}</td>` +
        `<td>${user['username']}</td>` +
        `<td>${user['passwd']}</td>` +
        `<td>${user['lastModified']}</tr></tbody>`;
    });

    table.innerHTML = view;
    
};


//Creating a new user.
function createNewUser() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let passwd = document.getElementById("passwd").value;
    let email = document.getElementById("email").value;
    let urole = document.getElementById("urole").value;

    const newuser = {
        username: username,
        lastname : lastname,
        firstname : firstname,
        passwd : passwd,
        email : email,
        urole : urole
    };


    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newuser)
    });
};
