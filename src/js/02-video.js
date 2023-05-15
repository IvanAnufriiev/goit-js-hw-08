import player from '@vimeo/player';
import throttle from 'lodash.throttle';
const SAVED_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new player(iframe);

player.on('timeupdate', throttle(function ({time}) {
    localStorage.setItem(SAVED_TIME, time)
}, 1000));

const saveTime = localStorage.getItem(SAVED_TIME);
const timeStop = JSON.parse(saveTime);

// player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0);

player.setCurrentTime(timeStop.time).then(function(time) {}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});