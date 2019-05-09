function f(instance: Instance) {
	if (instance.IsA("Script")) {
		print(instance);
	} else if (instance.IsA("ScreenGui")) {
		print(instance.ClassName);
	} else if (instance.IsA("Handles")) {
		const a = instance.ClassName;
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
