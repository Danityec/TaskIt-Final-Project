
var marge_user_id = 123

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

// function onSignIn(googleUser) {
//     id_token = googleUser.getAuthResponse().id_token;
//     console.log("onSignIn")
//     console.log(id_token)
//     str = id_token
//     // $.ajax({
//     //     url: `http://127.0.0.1:3000/api/login`,
//     //     type: 'POST',
//     //     data: str,
//     //     success: function (user_id) {
//     //         console.log(user_id)
//     //         window.location.replace("dashboard.html");
//     //     }
//     // });
//     location.replace("dashboard.html");
//     getAllUserTasks()
// }

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
        if (task.status == true) {
            $('#dynamic-task-list').append(
                '<tr><th>' + task.name + '</th>' +
                '<td>' + task.category + '</td>' +
                '<td class="status-td"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked></td>' +
                "<td><button type='button' class='view' title='View Details' data-toggle='tooltip' onclick='saveTaskId(\"" + task._id + "\")' >" +
                '<i class="material-icons">&#xE5C8;</i></button></td>'
            );
        }
        else {
            $('#dynamic-task-list').append(
                '<tr><th>' + task.name + '</th>' +
                '<td>' + task.category + '</td>' +
                '<td class="status-td"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></td>' +
                "<td><button type='button' class='view' title='View Details' data-toggle='tooltip' onclick='saveTaskId(\"" + task._id + "\")' >" +
                '<i class="material-icons">&#xE5C8;</i></button></td>'
            );
        }
    });
}

function saveTaskId(task_id) {
    localStorage.setItem('task_id', task_id);
    location.replace("task.html");
}