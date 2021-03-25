using MyWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyWebApplication.Controllers
{
    public class DefaultController : Controller
    {

        private static readonly IList<ToDo> _toDos;

        static DefaultController()
        {
            _toDos = new List<ToDo>
            {
                new ToDo
                {
                    Id = 1,
                    Content = "Task 1",
                    IsDone = true
                },
                new ToDo
                {
                    Id = 2,
                    Content = "Task 2",
                    IsDone = false
                },
                new ToDo
                {
                    Id = 3,
                    Content = "Task 3",
                    IsDone = false
                },
            };
        }
        // GET: Default
        public ActionResult Index()
        {
            return View();
        }

        //Get: ToDos
        public ActionResult ToDos()
        {
            return Json(_toDos, JsonRequestBehavior.AllowGet);
        }
    }
}