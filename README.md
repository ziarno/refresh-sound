Refresh Sound
-------------
Makes a sound on Meteor.startup.
No additional coding required - just `meteor add ziarno:refresh-sound` and you're good to go!

Note: Remove this package in production!
It is intended to bring your focus to the page when meteor hot reload refreshes the page.

Customization
-------------
no docs, just look at the source code, it's very simple:

```
var hasPlayedOnce = false
var playAtStartUp = true
var sound

if (Meteor.isClient) {
  //sound: waterdrop
  sound = new Audio("data:audio/wav;base64,//fkoapsekopaf-some-base64-audio-hash")
}
if (Meteor.isServer) {
  //mock for server side
  sound = {play(){}}
}

RefreshSound = {
  play() {
    sound.play()
    hasPlayedOnce = true
    return this
  },
  playOnce() {
    !hasPlayedOnce && RefreshSound.play()
    return this
  },
  setSound(audioSound) {
    sound = audioSound
    return this
  },
  setVolume(volume) {
    if (volume >= 0 && volume <= 1) {
      sound.volume = volume
    }
    return this
  },
  dontPlayAtStartup() {
    playAtStartup = false
    return this
  }
}

Meteor.startup(() => playAtStartUp && RefreshSound.playOnce())

export default RefreshSound
```

That's it!

As you can see, if you want to play the sound some other time during development
(ex. in some view, after rendering or subscription ready),
you can invoke `RefreshSound.dontPlayAtStartup()` before `Meteor.startup` ex. `main.js` file
(note: only on client side)