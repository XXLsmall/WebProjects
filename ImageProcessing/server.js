var Twit = require('twit');

var config = require('./config');
var fs = require('fs');

var T = new Twit(config);



var Bot = module.exports = function(config) { 
  this.twit = new Twit(config);
};



var stream = T.stream('user');

var filename = 'gp_poro.jpg';

Bot.prototype.mingle = function (callback) {
  var self = this;
  
  this.twit.get('followers/ids', function(err, reply) {
      if(err) { return callback(err); }
      
      var followers = reply.ids
        , randFollower  = randIndex(followers);
        
      self.twit.get('friends/ids', { user_id: randFollower }, function(err, reply) {
          if(err) { return callback(err); }
          
          var friends = reply.ids
            , target  = randIndex(friends);
            
          self.twit.post('friendships/create', { id: target }, callback); 
          console.log('fatto');
        })
    })
};


/*var parameters = {
	encoding: 'base64' 
}
var b64content = fs.readFileSync(filename, parameters);

T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Immagine modificata."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'loving life #nofilter', media_ids: [mediaIdStr] }

      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})*/



/*var params = {
	status: 'hello world!'
}

T.post('statuses/update', params, gotData);

function gotData(err, data, response) {
  console.log(data)
}*/


/*stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {
	console.log('immagine ricevuta');
	
   var replyto = eventMsg.in_reply_to_screen_name;
   var text = eventMsg.text
   
   if(replyto === "delieker61") {
   	var newtweet = '@' + from + 'questa è l immagine modificata.';
   	tweetIt(newtweet);
   }
}
function tweetit(txt) {
	var parameters = {
		encoding: 'base64' 
	}
	var b64content = fs.readFileSync(filename, parameters);

	T.post('media/upload', { media_data: b64content }, function (err, data, response) {
	 	// now we can assign alt text to the media, for use by screen readers and
		 // other text-based presentations and interpreters
		 var mediaIdStr = data.media_id_string
	 	var altText = "Immagine modificata."
	 	var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }

		 T.post('media/metadata/create', meta_params, function (err, data, response) {
			 if (!err) {
	   	  // now we can reference the media and post a tweet (media will attach to the tweet)
	   		  var params = { status: txt, media_ids: [mediaIdStr] }

	   	 T.post('statuses/update', params, function (err, data, response) {
	       console.log(data)
	     })
	    }
	  })
	})
}*/