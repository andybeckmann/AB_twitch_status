AB_twitch_status
==========

AB_twitch_status modifies links to display "OFFLINE" or "LIVE" depending on whether or not a Twitch.tv user is currently streaming.

Requires a client id from dev.Twitch.tv to be inserted on line 16 of demo.html in place of "####################" to work.

## Screenshot

![Screenshot](/screenshot.png?raw=true)

## Required files

### Styles
[AB_twitch_status/scss/components/_AB_twitch_status.scss](https://github.com/andybeckmann/AB_twitch_status/blob/master/scss/components/_AB_twitch_status.scss)

### Scripts
[AB_twitch_status/js/AB_twitch_status.js](https://github.com/andybeckmann/AB_twitch_status/blob/master/js/AB_twitch_status.js)

## Example

### HTML
```html
<div class="twitch_status_wrapper">
	<span class="twitch-url">Twitch.tv/andybeckmann:</span> <span id="twitch-stream-status" class="status">offline</span>
</div>
```

### JS
```javascript
twitchStatus('abeckmann', '####################');
```