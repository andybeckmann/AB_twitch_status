/**
 * AB_twitch_status
 * version: 1.0.0
 *
 * twitchStatus() displays the status of a Twitch.tv streamer
 * @param {string} userName - Twitch.tv username
 * @param {string} clientId - dev.Twitch.tv developer client id
 */

function twitchStatus(userName, clientId) {

	var twitchElement = document.getElementById('twitch-stream-status'),
		twitchUser = userName,
		twitchDevClientId = clientId,
		twitchStreamStatus = 'offline';

	var xhr = new XMLHttpRequest();
		xhr.open('GET', 'https://api.twitch.tv/helix/streams?user_login=' + twitchUser);
		xhr.setRequestHeader('Client-ID', twitchDevClientId);
		xhr.send();

	xhr.onreadystatechange = function () {

		if (xhr.readyState === 4 && xhr.status === 200) {

			var data = JSON.parse(xhr.responseText);

			if (data.data[0] != undefined) {
				if (data.data[0].type == 'live') {
					twitchStreamStatus = 'live';
					twitchElement.classList.add('live');
				}
			}

			document.querySelector('#twitch-stream-status .status').innerText = twitchStreamStatus;

		}
	};
}