using System.Web.Mvc;

namespace IntroAngularJS.Areas.Contacts
{
    public class ContactsAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "Contacts";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute("", "Contacts/", defaults: new { controller = "Contacts", action = "Index", area = "Contacts" });
        }
    }
}