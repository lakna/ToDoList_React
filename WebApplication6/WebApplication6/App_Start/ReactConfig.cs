using React;

using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.ChakraCore;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(MyWebApplication.ReactConfig), "Configure")]

namespace MyWebApplication
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            JsEngineSwitcher.Current.DefaultEngineName = ChakraCoreJsEngine.EngineName;
            JsEngineSwitcher.Current.EngineFactories.AddChakraCore();
        }
	}
}