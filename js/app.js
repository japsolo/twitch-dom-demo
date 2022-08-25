const getElement = (selector, type = null) => {
    if (type === 'all') {
        return document.querySelectorAll(selector);
    }
    return document.querySelector(selector);
}

const users = [
    { name: 'Eleven', email: 'eleven@gmail.com' },
    { name: 'Mike', email: 'mike@gmail.com' },
    { name: 'Dustin', email: 'dustin@gmail.com' },
];

const container = getElement(".container");

container.innerHTML = "<h1>Best Friends!</h1>";
container.insertAdjacentHTML(
    "beforeend",
    "<ul id='usersList'></ul>",
);

const usersListTag = getElement("#usersList");

for (const oneUser of users) {
    // beforebegin | afterbegin | beforeend| afterend 
    usersListTag.insertAdjacentHTML(
        "beforeend",
        `<li>${oneUser.name}</li>`
    );
}

container.insertAdjacentHTML(
    "beforeend",
    "<button id='addFriend'>Add friend</button>",
);

const friends = [
    { name: 'Steve', email: 'steve@gmail.com' },
    { name: 'Robin', email: 'robin@gmail.com' },
    { name: 'Nancy', email: 'nancy@gmail.com' },
    { name: 'Lucas', email: 'lucas@gmail.com' },
    { name: 'Max', email: 'max@gmail.com' },
    { name: 'Eddie', email: 'eddie@gmail.com' },
]

const addFriend = (evt) => {
    const newFriend = friends.shift();

    if (friends.length === 0) {
        evt.currentTarget.setAttribute("disabled", "true");
        evt.currentTarget.style.opacity = "0.3";
    }

    if (!!newFriend) {
        usersListTag.insertAdjacentHTML(
            "beforeend",
            `<li>
                    ${newFriend.name} - 
                    <a href="mailto:${newFriend.email}">${newFriend?.email}</a>
                </li>`
        );
    }
}

const addButton = getElement("#addFriend");
addButton.addEventListener("click", addFriend);

// document.body.addEventListener("click", function () {
//     console.log("¿Y se marchó?");
// });

// document.body.addEventListener("click", function () {
//     window.open(
//         "https://instagram.com/thefullstackdevs",
//         "_blank"
//     );
// });