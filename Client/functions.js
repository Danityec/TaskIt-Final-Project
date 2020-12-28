var id_token = null

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    // if (id_token) {
    //     console.log("jjjjj")
    //     getAllUserTasks()
    // }
    // else {
    //     console.log("kkkkk")
    // }
    getAllUserTasks()
});

function onSignIn(googleUser) {
    id_token = googleUser.getAuthResponse().id_token;
    console.log("onSignIn")
    console.log(id_token)
    str = id_token
    // $.ajax({
    //     url: `http://127.0.0.1:3000/api/login`,
    //     type: 'POST',
    //     data: str,
    //     success: function (user_id) {
    //         console.log(user_id)
    //         window.location.replace("dashboard.html");
    //     }
    // });
    window.location.replace("dashboard.html");
    getAllUserTasks()
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}

function getAllUserTasks() {
    // var auth2 = gapi.auth2.getAuthInstance();
    // if (auth2.isSignedIn.get()) {
    //     $.ajax({
    //         url: `http://127.0.0.1:3000/api/tasks`,
    //         type: 'GET',
    //         success: function (tasks) {
    //             console.log(tasks);
    //             console.log("ggg")
    //             displayTasks(tasks);
    //         }
    //     });
    // }
    $.ajax({
        url: `http://127.0.0.1:3000/api/tasks`,
        type: 'GET',
        success: function (tasks) {
            console.log(tasks);
            displayTasks(tasks);
        }
    });
}

function displayTasks(tasks) {
    $("#dynamic-task-list").empty();
    tasks.forEach(task => {
        $('#dynamic-task-list').append(
            '<tr><th>' + task.name + '</th>' +
            '<td>' + task.category + '</td>' +
            '<td><span class="status text-success">&bull;</span>' + task.status + '</td>' +
            '<td><a href="task.html" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td></tr>'
        );
    });
}


function setUser(info) {
    $.ajax({
        url: ``,
        type: 'POST',
        data: info,
        success: function (rest) {
            window.location.replace("//TODO: add here url");
        }
    });
}

