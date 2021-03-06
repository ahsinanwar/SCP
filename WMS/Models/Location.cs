//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WMS.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Location
    {
        public Location()
        {
            this.Emps = new HashSet<Emp>();
            this.Readers = new HashSet<Reader>();
        }
    
        public short LocID { get; set; }
        public string LocName { get; set; }
        public Nullable<short> CityID { get; set; }
    
        public virtual City City { get; set; }
        public virtual ICollection<Emp> Emps { get; set; }
        public virtual ICollection<Reader> Readers { get; set; }
    }
}
