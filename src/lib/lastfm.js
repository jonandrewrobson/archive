'use strict';

const API = require('last.fm.api'),
api = new API ({ 
    apiKey: '70df4474d51af00f6af1e4541b9fcbdd', 
    apiSecret: 'd01a8dc8e6e2414c39ddf0194ee84b51'
});

api.album.getTags({
    artist: 'nirvana',
    album: 'nevermind'
})
    .then(tags => { console.log(tags); })
    .catch(err => { console.error(err); });
