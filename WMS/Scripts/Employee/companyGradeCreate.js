$(document).ready(function () {

    $('#GradeID').empty();
   
    $.getJSON(GradeList, function (data) {
        var items;
        $.each(data, function (i, state) {
                items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
            // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
        });
        $('#GradeID').html(items);
        $('#GradesDivID').show();
    });


    $('#CompanyID').change(function () {
        $('#GradeID').empty();
       
        $.getJSON(GradeList, function (data) {
            var items;
            $.each(data, function (i, state) {
                    items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#GradeID').html(items);
            $('#GradesDivID').show();
        });
    });

});