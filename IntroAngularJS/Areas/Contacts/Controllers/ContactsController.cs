using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace IntroAngularJS.Areas.Contacts.Controllers
{
    public class ContactsController : Controller
    {
        //
        // GET: /Contacts/Contacts/
        public ActionResult Index()
        {
            return View();
        }
	}
}