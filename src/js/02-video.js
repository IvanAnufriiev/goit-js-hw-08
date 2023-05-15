import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const SAVED_TIME = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function ({seconds}) {
    localStorage.setItem(SAVED_TIME, seconds)
}, 1000));

const saveTime = localStorage.getItem(SAVED_TIME);
const timeStop = JSON.parse(saveTime);


player.setCurrentTime(timeStop.seconds).then(function(seconds) {}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
player.setCurrentTime(localStorage.getItem(SAVED_TIME) || 0);
