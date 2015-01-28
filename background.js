
chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log("Url intercepted: " + info.url);
    if(info.url.indexOf("allow_audio_only") == -1)
    {
      var newUrl = info.url.replace(".m3u8?",".m3u8?allow_audio_only=true&");
      console.log("new url:  "+newUrl);
      return {redirectUrl: newUrl};
    }
    return {};
  },

  {
    urls: [
      "*://usher.twitch.tv/*"
    ],
  },
  // extraInfoSpec
  ["blocking"]);
