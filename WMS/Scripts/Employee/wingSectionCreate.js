$(document).ready(function () {

    $('#DeptID').empty();
    
    var convalue = $('#CompanyID').val();
    $.getJSON(DepartmentList, function (data) {
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


    $('#CompanyID').change(function () {
        $('#DeptID').empty();
        //var URL = '/WMS/Emp/DepartmentList';
        var URL = '/Emp/DepartmentList';
        var convalue = $('#CompanyID').val();
        $.getJSON(DepartmentList, function (data) {
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


    $('#DeptID').change(function () {
        $('#SecID').empty();
        
        $.getJSON(SectionList + '/' + $('#DeptID').val(), function (data) {
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