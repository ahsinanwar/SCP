$(document).ready(function () {

    $('#GradeID').empty();
   
    $.getJSON(GradeList, function (data) {
        var selectedItemID = document.getElementById("selectedGradeIdHidden").value;
        var items;
        $.each(data, function (i, state) {
            if (state.Value == selectedItemID)
                items += "<option selected value='" + state.Value + "'>" + state.Text + "</option>";
            else
                items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
            // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
        });
        $('#GradeID').html(items);
        $('#GradesDivID').show();
    });


    $('#CompanyID').change(function () {
        $('#GradeID').empty();
     
        $.getJSON(GradeList, function (data) {
            var selectedItemID = document.getElementById("selectedGradeIdHidden").value;
            var items;
            $.each(data, function (i, state) {
                if (state.Value == selectedItemID)
                    items += "<option selected value='" + state.Value + "'>" + state.Text + "</option>";
                else
                    items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#GradeID').html(items);
            $('#GradesDivID').show();
        });
    });

});