# 说明
## 微信插件修复了IOS 下的朋友圈分享支持本地图片 和base64编码

在原有插件   https://github.com/floatinghotpot/cordova-plugin-wechat.git
基础上借鉴了 https://github.com/yangheng/SocialSharing-PhoneGap-Plugin.git 开源项目

# cordova-plugin-wechat

A cordova plugin, a JS version of Wechat SDK

# Feature

Share title, description, image, and link to wechat moment(朋友圈)

# Example

See example in [demo js file](https://github.com/yangheng/cordova-plugin-wechat/blob/master/demo/js/controllers.js).

# Install(iOS)

1. ```cordova plugin add cordova-plugin-wechat```, or using [plugman](https://npmjs.org/package/plugman), [phonegap](https://npmjs.org/package/phonegap), [ionic](http://ionicframework.com/)

2. ```cordova build ios```

4. Change the URL Type using XCode

# Note: Install(Android) 
Inspired by https://github.com/vilic/cordova-plugin-wechat
Wechat needs to callback to "your.package.name.wxapi.WXEntryActivity" to handle response. Since the package name is determined when you install the packag.java, so we use hook to call android-install.js to do the work.
I found some older version of cordova(ionic 1.3.0) doesn't trigger this js, so if you found this file isn't copied, consider upgrade Cordova.


# Usage

## Set AppId before call other APIs
```javascript
Wechat.setOptions({
    appId: 'wx1234567890' // your app id here
});
```

## Check if wechat is installed
```Javascript
Wechat.isInstalled(function (installed) {
    alert("Wechat installed: " + (installed ? "Yes" : "No"));
}, function (reason) {
    alert("Failed: " + reason);
});
```

## Authenticate using Wechat
```Javascript
var scope = "snsapi_userinfo";
Wechat.auth(scope, function (response) {
    // you may use response.code to get the access token.
    alert(JSON.stringify(response));
}, function (reason) {
    alert("Failed: " + reason);
});
```

## Share text
```Javascript
Wechat.share({
    text: "This is just a plain string",
    scene: Wechat.Scene.TIMELINE   // share to Timeline
}, function () {
    alert("Success");
}, function (reason) {
    alert("Failed: " + reason);
});
```

## Share media(e.g. link, photo, music, video etc)
```Javascript
Wechat.share({
    message: {
        title: "Hi, there",
        description: "This is description.",
        thumb: "www/img/thumbnail.png",
        mediaTagName: "TEST-TAG-001",
        messageExt: "这是第三方带的测试字段",
        messageAction: "<action>dotalist</action>",
        media: "YOUR_MEDIA_OBJECT_HERE"
    },
    scene: Wechat.Scene.TIMELINE   // share to Timeline
}, function () {
    alert("Success");
}, function (reason) {
    alert("Failed: " + reason);
});
```

### Share link
```Javascript
Wechat.share({
    message: {
        ...
        media: {
            type: Wechat.Type.LINK,
            webpageUrl: "http://tech.qq.com/zt2012/tmtdecode/252.htm"
        }
    },
    scene: Wechat.Scene.TIMELINE   // share to Timeline
}, function () {
    alert("Success");
}, function (reason) {
    alert("Failed: " + reason);
});
```

# FAQ

Q: "Wechat not installed", even installed

A: Please make sure "wechatappid" is added in ```config.xml``` 

Q: After sharing in wechat, it will not get back to my app.

A: Please make sure the URL Type is correct(iOS)


# TODO

1. ~~Add android version~~

2. ~~Share to wechat session(聊天) and wechat favorite(收藏)~~

3. ~~Add other media types, including music etc.~~

4. Other APIs

5. ~~Android Version update~~

# LICENSE

[MIT LICENSE](http://opensource.org/licenses/MIT)
