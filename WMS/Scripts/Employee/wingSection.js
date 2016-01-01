$(document).ready(function () {


    $('#DeptID').empty();
   
    var convalue =  $('#CompanyID').val();
    $.getJSON(DepartmentList, function (data) {
        var selectedItemID = document.getElementById("selectedDeptIDHidden").value;
        var items;
        $.each(data, function (i, state) {

            if (state.Value == selectedItemID)
                items += "<option selected value='" + state.Value + "'>" + state.Text + "</option>";
            else
                items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
            // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
        });
        $('#DeptID').html(items);

        $('#SecID').empty();
       
       var convalue = $('#DeptID').val();
       $.getJSON(SectionList + '/' + convalue, function (data) {
            var selectedItemID = document.getElementById("selectedSectionIdHidden").value;
            var items;
            $.each(data, function (i, state) {
                if (state.Value == selectedItemID)
                    items += "<option selected value='" + state.Value + "'>" + state.Text + "</option>";
                else
                    items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#SecID').html(items);
            $('#SectionDivID').show();
        });
    });


   


    $('#DeptID').change(function () {
        $('#SecID').empty();
       
        var convalue = $('#DeptID').val();
        $.getJSON(SectionList + '/' + convalue, function (data) {
            var selectedItemID = document.getElementById("selectedSectionIdHidden").value;
            var items;
            $.each(data, function (i, state) {
                if (state.Value == selectedItemID)
                    items += "<option selected value='" + state.Value + "'>" + state.Text + "</option>";
                else
                    items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#SecID').html(items);
            $('#SectionDivID').show();
        });
    });


    $('#CompanyID').change(function () {
        $('#DeptID').empty();
        
       var convalue =  $('#CompanyID').val();
       $.getJSON(DepartmentList , function (data) {
            var items;
            $.each(data, function (i, state) {
                items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#DeptID').html(items);
            $('#SecID').empty();
          
            var convalue = $('#DeptID').val();
            $.getJSON(SectionList + '/' + convalue, function (data) {
                var items;
                $.each(data, function (i, state) {
                    items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                    // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
                });
                $('#SecID').html(items);
                $('#SectionDivID').show();
            });
        });
    });

});