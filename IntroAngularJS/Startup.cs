using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(IntroAngularJS.Startup))]
namespace IntroAngularJS
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
