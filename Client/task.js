$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
    getSingleTask()
});

function getSingleTask() {
    id = localStorage.getItem('task_id')
    localStorage.clear();
    $.ajax({
        url: `http://127.0.0.1:3000/api/tasks/${id}`,
        type: 'GET',
        success: function (task) {
            displaySingleTasks(task);
        }
    });
}

function displaySingleTasks(task) {
    $("#dynamic-task-name").empty();
    $("#dynamic-task-name").append('<h3>' + task['name'] + '</h3>');

    $("#dynamic-task-category").empty();
    $("#dynamic-task-category").append('<h4>' + task['category'] + '</h4>');

    $("#dynamic-share-list").empty();
    shareArray = task['share']
    console.log(shareArray)
    shareArray.forEach(share => {
        $("#dynamic-share-list").append(
            '<div class="col-2">' + share + '</div>'
        )
    })

    $("#dynamic-subtask-list").empty();
    subTaskArray = task.subTask
    subTaskArray.forEach(subtask => {
        $("#dynamic-subtask-list").append(
            '<tr class="row"><td class="col">' +
            subtask['name'] +
            '</td><td class="col">' +
            subtask['status'] +
            '</td><td class="col"><button class="edit" type="button" data-toggle="tooltip">' +
            '<i class="material-icons">&#xE254;</i></button><button class="delete" type="button" data-toggle="tooltip">' +
            '<iclass="material-icons">&#xE872;</i></button></td> </tr>'
        )
    })
}

