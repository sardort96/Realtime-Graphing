var pubnub = new PubNub({

  publishKey: 'demo',
  subscribeKey: 'demo'

});

eon.chart({

  pubnub: pubnub,
  channels: ['mychannel'],
  generate: {
    bindto: '#chart',
    data: {
    labels: true,
    type: 'bar'
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    tooltip: {
      show: false
    }
  }
  
});

eon.chart({

  pubnub: pubnub,
  channels: ['mychannel'],
  generate: {
    bindto: '#pie',
    data: {
    labels: true,
    type: 'pie'
    },
    bar: {
      width: {
      ratio: 0.5
      }
    }
  }

});

setInterval(function(){

  pubnub.publish({

    channel: 'mychannel',
    message: {
      eon: {
      'West': Math.floor(Math.random() * 13),
      'East': Math.floor(Math.random() * 13),
      'Diving Well': Math.floor(Math.random() * 13),
      }
    }
    
  });

}, 2000);
