$(document).ready(function () {

    $('#CrewID').empty();
    
    $.getJSON(CrewList, function (data) {
        var items;
        $.each(data, function (i, state) {
            items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
            // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
        });
        $('#CrewID').html(items);
    });


    $('#CompanyID').change(function () {
        $('#CrewID').empty();
         $.getJSON(CrewList, function (data) {
            var items;
            $.each(data, function (i, state) {
                items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#CrewID').html(items);
        });
    });

});