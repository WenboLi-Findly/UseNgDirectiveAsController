using System.Web;
using System.Web.Optimization;

namespace directiveAwesome
{
	public class BundleConfig
	{
		// For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
		public static void RegisterBundles(BundleCollection bundles)
		{
			bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
						"~/Scripts/jquery-{version}.js"));

			bundles.Add(new ScriptBundle("~/bundles/angular").Include(
							"~/Scripts/angular.js",
							"~/Scripts/angular-ui-router.js",
							"~/Scripts/bootstrap.js",
							"~/Scripts/bootbox.js",
							"~/Scripts/jquery.datetimepicker.js"));

			bundles.Add(new ScriptBundle("~/bundles/app").Include(
							"~/App/main.js",
							"~/App/navigation/navigation.js",
							"~/App/home/home.js",
							"~/App/box.js",
							"~/App/sales/sales.js",
							"~/App/datetime.js"));


			// Use the development version of Modernizr to develop with and learn from. Then, when you're
			// ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
			bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
						"~/Scripts/modernizr-*"));

			bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/bootstrap.css",
																 "~/Content/Site.css",
																 "~/Content/jquery.datetimepicker.css"));

		}
	}
}