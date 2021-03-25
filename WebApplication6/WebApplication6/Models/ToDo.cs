using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyWebApplication.Models
{
    public class ToDo
    {       
        public int Id { get; set; }
        [Required]
        public string Content { get; set; }
        public bool IsDone { get; set; } = false;
      
    }
}