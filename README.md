# ThreeGUI
ThreeGUI is supposed to be a GUI for Three.js.

When looking for a GUI for my Ludum Dare 31 submission in the last hour of the compo, I couldn't find anything that suited my needs.
The only other GUI I found was dat.GUI, which I ended up settling with. Although dat.GUI is great at what it does (allow users to adjust the value of variables), it is not well suited for simply having some text overlaying the game canvas.

This is where ThreeGUI comes it. By creating an invisible canvas on top of the already existing canvas, you can easily output some text to the user.
