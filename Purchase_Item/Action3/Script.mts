Device("Device").App("Advantage Shopping").MobileButton("Menu").Tap
Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 0,0
Device("Device").App("Advantage Shopping").MobileEdit("userNameLabel").SetFocus
Device("Device").App("Advantage Shopping").MobileEdit("userNameLabel_2").Set "otuser1"
Device("Device").App("Advantage Shopping").MobileEdit("passwordLabel").SetFocus
Device("Device").App("Advantage Shopping").MobileEdit("passwordLabel_2"). set "Password1"
Device("Device").App("Advantage Shopping").MobileButton("LOGIN").Tap
