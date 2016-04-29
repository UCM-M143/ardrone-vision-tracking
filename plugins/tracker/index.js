var tracking = false;

function detectPixel() {
	
	};

function tracker(name, deps) {
    // Nothing special on the backend for now
	//debug = deps.debug || false;
    //io=deps.io;
	client = deps.client;
	deps.io.sockets.on('connection', function (socket) {
		console.log("Tracker connected." + socket);
        // socket.on('/pilot/move', function (cmd) {
            // var _name;
            // console.log("copterpixel", cmd);
			// io.sockets.emit('/message','fake-toggled');
            // deps.client.up(0.1);
        // });        
		socket.on('/copterpixel', function (cmd) {
            //var _name;
            console.log("copterpixel get msg: ", cmd);
			//io.sockets.emit('/message','fake-toggled');
			//if (cmd=="enable tracking") {
            //deps.client.up(0.1);
			//client.stop(); // make sure to stop the helicopter if stop copterface
				// tracking = true;
			//}		
			client.stop();
			turnAmount = cmd;
			if( turnAmount > 0 ) client.clockwise( turnAmount );
			else client.counterClockwise( Math.abs( turnAmount ) );
			if (turnAmount == 0) client.stop();
			

			// if (cmd=="no tracking") {
            //deps.client.down(0.1);
				// client.stop(); // make sure to stop the helicopter if stop copterface
				// tracking = false;
			//}
			//if (tracking) detectPixel();
        });
	});
};

module.exports = tracker;
