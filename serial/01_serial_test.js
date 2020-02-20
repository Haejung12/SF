const SerialPort = require("serialport");

const sp = new SerialPort("COM4", {        //   /dev/ttyACM0
    baudRate : 115200,
    autoOpen: false
});


sp.open(function() {
    console.log('Serial Port OPEN');
    sp.on('data', function(data) {
        console.log("CDS Sensor Value : ", data[0]);
        sp.write('OK', function(err) {
            if(err) {
            console.log(err);
            }
        });
    });
});