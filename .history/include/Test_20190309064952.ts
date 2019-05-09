function f(instance: Instance) {
	if (instance.IsA("UIGridStyleLayout")) {
		print(instance.ClassName);
	}
}

function useScreenGui(screen: ScreenGui | GuiMain) {
	screen.IgnoreGuiInset = true;
}
