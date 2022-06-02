using System;
using System.Collections.Generic;
using System.Text;

namespace CNS.ZOOM360.Entities
{
    public class Employee:BaseEntity
    {
        public string EmployeeName { get; set; }
        public DateTime DOJ { get; set; }
    }
}
