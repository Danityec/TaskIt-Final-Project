var marge_user_id = 123

$(function () {
    listeners();
    getTemplates();
});

function getTemplates() {
    $.ajax({
        url: `http://127.0.0.1:3000/api/tasks/templates`,
        type: 'GET',
        success: function (templates) {
            console.log(templates);
            displayTemplates(templates);
        }
    });
}

function displayTemplates(templates) {

}


function listeners() {
    $("#submit").click(() => {
        new_task = {
            "templateID": null,
            "userID": marge_user_id,                    // TEMP user id for Marge Simpson
            "share": [null],
            "name": $("#task_name").val(),
            "category": $("#task_category").val(),
            "status": false,
            "subTask": null
        }
        console.log(new_task)
        $.ajax({
            url: 'http://127.0.0.1:3000/api/tasks/',
            type: 'POST',
            data: new_task,
            success: function (data) {
                console.log(data)
                location.replace("dashboard.html");
            }
        });
    });
}
