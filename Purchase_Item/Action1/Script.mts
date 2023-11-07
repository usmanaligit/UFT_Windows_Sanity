Device("Device").App("Advantage Shopping").MobileList("MobileList").Select 0,0
Device("Device").App("Advantage Shopping").MobileList("MobileList_2").Select 0,0
wait(1)
Device("Device").App("Advantage Shopping").MobileButton("ADD TO CART").Tap
Device("Device").App("Advantage Shopping").MobileButton("1").Tap
'Device("Device").App("Advantage Shopping").MobileObject("SHOPPING CART (1)").LongPress 355,168,1.600000
Device("Device").Check CheckPoint("Device")
Device("Device").App("Advantage Shopping").MobileButton("CHECKOUT (PAY 299.99)").Tap
Device("Device").App("Advantage Shopping").MobileButton("PAY NOW").Tap
Device("Device").App("Advantage Shopping").MobileButton("Ok").Tap


