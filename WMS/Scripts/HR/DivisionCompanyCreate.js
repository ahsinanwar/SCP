$(document).ready(function () {

    $('#DeptID').empty();
   
    $.getJSON(DepartmentList, function (data) {
        var items;
        $.each(data, function (i, state) {
            items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
            // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
        });
        $('#DeptID').html(items);
    });


    
});