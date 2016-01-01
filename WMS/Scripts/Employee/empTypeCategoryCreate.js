﻿$(document).ready(function () {

    $('#TypeID').empty();
    var convalue = $('#CatID').val();
   
  $.getJSON(EmpTypeList, function (data) {
        var items;
        $.each(data, function (i, state) {
            items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
            // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
        });
        $('#TypeID').html(items);
        $('#EmpTypeDivID').show();
    });


    $('#CatID').change(function () {
        $('#TypeID').empty();
       
        var convalue = $('#CatID').val();
        $.getJSON(EmpTypeList, function (data) {
            var items;
            $.each(data, function (i, state) {
                items += "<option value='" + state.Value + "'>" + state.Text + "</option>";
                // state.Value cannot contain ' character. We are OK because state.Value = cnt++;
            });
            $('#TypeID').html(items);
            $('#EmpTypeDivID').show();
        });
    });

});