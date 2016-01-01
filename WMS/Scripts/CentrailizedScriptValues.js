$(document).ready(function () {



    var Production = false;
    var searchForWMSValue = window.location.href;
    var WMSvalue="WMS";
    var EmpTypeList = '/Emp/EmpTypeList';
    var GradeList = '/Emp/GradeList';
    var CrewList = '/Emp/CrewList';
    var DesignationList = '/Emp/DesignationList';
    var DepartmentList = '/Emp/DepartmentList';
    var SectionList = '/Emp/SectionList';
    


 
    
       
   
    if(Production==true) {
        EmpTypeList = WMSvalue + EmpTypeList;
        GradeList = WMSvalue + GradeList;
        CrewList = WMSvalue + CrewList;
        DesignationList = WMSvalue + DesignationList;
        DepartmentList = WMSvalue + DepartmentList;
        SectionList = WMSvalue + SectionList;
    }
   



});
