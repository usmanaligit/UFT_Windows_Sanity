AIUtil.SetContext Window("regexpwndtitle:=Google Chrome", "regexpwndclass:=Chrome_WidgetWin_1", "is owned window:=False", "is child window:=False")
AIUtil("profile", micAnyText, micFromBottom, 1).Click
AIUtil.FindTextBlock("CREATE NEW ACCOUNT").Click
