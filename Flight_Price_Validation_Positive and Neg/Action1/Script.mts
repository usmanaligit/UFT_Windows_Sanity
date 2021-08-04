
systemutil.run("C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")

'Login
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_1897481656_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "6109fdd189a9d860b910" @@ hightlight id_;_1903755456_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1945698496_;_script infofile_;_ZIP::ssf4.xml_;_

'Main test Itinerary
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1945697632_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco" @@ hightlight id_;_1945698256_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1945699936_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,0 @@ hightlight id_;_1945701568_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1897489432_;_script infofile_;_ZIP::ssf11.xml_;_
wpfwindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set "Usman"

'Ticket price Validation
WpfWindow("Micro Focus MyFlight Sample").WpfObject("$176.80").Check CheckPoint("$176.80") @@ hightlight id_;_1911315312_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1907193368_;_script infofile_;_ZIP::ssf14.xml_;_

'logout
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_198854_;_script infofile_;_ZIP::ssf15.xml_;_
