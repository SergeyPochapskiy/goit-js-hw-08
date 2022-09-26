import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load, remove } from './storage';

const player = new Player('vimeo-player');
const LOCALSTORAGE_PLAYER_KEY = 'videoplayer-current-time';
const refPlayer = document.querySelector('#vimeo-player');

player.on('timeupdate', throttle(data, 1000));
function data(timeupdate) {
  const seconds = timeupdate.seconds;
  save(LOCALSTORAGE_PLAYER_KEY, seconds);
  if (!seconds) {
    return;
  }
}


player.setCurrentTime(load(LOCALSTORAGE_PLAYER_KEY)).then(function (seconds) {
  
});

const markup = `<button class="buttonReset" type="reset">Очистити час перегляду</button>`;
refPlayer.insertAdjacentHTML('afterend', markup);

const onResetTime = event => {
  window.location.reload();
  remove(LOCALSTORAGE_PLAYER_KEY);
};
const refButton = document.querySelector('.buttonReset');
refButton.addEventListener('click', onResetTime);
