angular.module('starter.controllers', [])

.controller('DemoCtrl', function ($scope, $ionicPopup) {

    var uri="data:image/png;base64,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";

            $scope.data = {
                selectedScene: 0,
                selectedSceneLabel: "会话"
            };

            $scope.scenes = [
                {
                    label: "会话",
                    value: 0
                },
                {
                    label: "朋友圈",
                    value: 1
                },
                {
                    label: "收藏",
                    value: 2
                }
            ];

            $scope.buttons = [
                {
                    id: "check-installed",
                    label: "是否安装了微信"
                },
                {
                    id: "send-text",
                    label: "发送Text消息给微信"
                },
                {
                    id: "send-photo",
                    label: "发送Photo消息给微信"
                },
                {
                    id: "send-link",
                    label: "发送Link消息给微信"
                },
                {
                    id: "send-music",
                    label: "发送Music消息给微信"
                },
                {
                    id: "send-video",
                    label: "发送Video消息给微信"
                },
                {
                    id: "send-app",
                    label: "发送App消息给微信"
                },
                {
                    id: "send-nongif",
                    label: "发送非gif消息给微信"
                },
                {
                    id: "send-gif",
                    label: "发送gif消息给微信"
                },
                {
                    id: "send-file",
                    label: "发送文件消息给微信"
                },
                {
                    id: "auth",
                    label: "微信授权登录"
                },
                {
                    id: "test-url",
                    label: "测试URL长度"
                },
                {
                    id: "open-profile",
                    label: "打开Profile"
                },

                {
                    id: "open-mp",
                    label: "打开mp网页"
                },
                {
                    id: "add-card",
                    label: "添加单张卡券至卡包"
                },
                {
                    id: "add-cards",
                    label: "添加多张卡券至卡包"
                }
            ];

            $scope.$watch('data.selectedScene', function () {
                $scope.scenes.forEach(function (item) {
                    if (item.value == $scope.data.selectedScene) {
                        $scope.data.selectedSceneLabel = item.label;
                    }
                });
            }, true);

            $scope.handle = function (id) {
                var params = {
                    scene: $scope.data.selectedScene
                };

                if (id == 'send-text') {
                    params.text = "人文的东西并不是体现在你看得到的方面，它更多的体现在你看不到的那些方面，它会影响每一个功能，这才是最本质的。但是，对这点可能很多人没有思考过，以为人文的东西就是我们搞一个很小清新的图片什么的。”综合来看，人文的东西其实是贯穿整个产品的脉络，或者说是它的灵魂所在。";
                } else {
                    params.message = {
                        title: "[TEST]" + id,
                        description: "[TEST]Sending from test application",
                        thumb: "www/img/res1thumb.png",
                        mediaTagName: "TEST-TAG-001",
                        messageExt: "这是第三方带的测试字段",
                        messageAction: "<action>dotalist</action>",
                        media: {}
                    };

                    Wechat.setOptions({
                        appId: 'wx75e363993c0f2683'
                    });

                    switch (id) {
                        case 'check-installed':
                            Wechat.isInstalled(function (installed) {
                                alert("Wechat installed: " + (installed ? "Yes" : "No"));
                            });
                            return ;

                        case 'send-photo':
                            params.message.thumb = uri;
                            params.message.media.type = Wechat.Type.IMAGE;
                            params.message.media.image = uri;
                            break;

                        case 'send-link':
                            params.message.thumb = "www/img/res2.png";
                            params.message.media.type = Wechat.Type.LINK;
                            params.message.media.webpageUrl = "http://tech.qq.com/zt2012/tmtdecode/252.htm";
                            break;

                        case 'send-music':
                            params.message.thumb = "www/img/res3.jpg";
                            params.message.media.type = Wechat.Type.MUSIC;
                            params.message.media.musicUrl = "http://y.qq.com/i/song.html#p=7B22736F6E675F4E616D65223A22E4B880E697A0E68980E69C89222C22736F6E675F5761704C69766555524C223A22687474703A2F2F74736D7573696334382E74632E71712E636F6D2F586B30305156342F4141414130414141414E5430577532394D7A59344D7A63774D4C6735586A4C517747335A50676F47443864704151526643473444442F4E653765776B617A733D2F31303130333334372E6D34613F7569643D3233343734363930373526616D703B63743D3026616D703B636869643D30222C22736F6E675F5769666955524C223A22687474703A2F2F73747265616D31342E71716D757369632E71712E636F6D2F33303130333334372E6D7033222C226E657454797065223A2277696669222C22736F6E675F416C62756D223A22E4B880E697A0E68980E69C89222C22736F6E675F4944223A3130333334372C22736F6E675F54797065223A312C22736F6E675F53696E676572223A22E5B494E581A5222C22736F6E675F576170446F776E4C6F616455524C223A22687474703A2F2F74736D757369633132382E74632E71712E636F6D2F586C464E4D313574414141416A41414141477A4C36445039536A457A525467304E7A38774E446E752B6473483833344843756B5041576B6D48316C4A434E626F4D34394E4E7A754450444A647A7A45304F513D3D2F33303130333334372E6D70333F7569643D3233343734363930373526616D703B63743D3026616D703B636869643D3026616D703B73747265616D5F706F733D35227D";
                            params.message.media.musicDataUrl = "http://stream20.qqmusic.qq.com/32464723.mp3";
                            break;

                        case 'send-video':
                            params.message.thumb = "www/img/res7.jpg";
                            params.message.media.type = Wechat.Type.VIDEO;
                            params.message.media.videoUrl = "http://v.youku.com/v_show/id_XNTUxNDY1NDY4.html";
                            break;

                        case 'send-app':
                            params.message.thumb = "www/img/res2.jpg";
                            params.message.media.type = Wechat.Type.APP;
                            params.message.media.extInfo = "<xml>extend info</xml>";
                            params.message.media.url = "http://weixin.qq.com";
                            break;

                        case 'send-nongif':
                            params.message.thumb = "www/img/res5thumb.png";
                            params.message.media.type = Wechat.Type.EMOTION;
                            params.message.media.emotion = "www/resources/res5.jpg";
                            break;

                        case 'send-gif':
                            params.message.thumb = "www/img/res6thumb.png";
                            params.message.media.type = Wechat.Type.EMOTION;
                            params.message.media.emotion = "www/resources/res6.gif";
                            break;

                        case 'send-file':
                            params.message.thumb = $scope.fileUrl;
                            params.message.media.type = Wechat.Type.FILE;
                            params.message.media.file = $scope.fileUrl;
                            break;

                        case 'auth':
                            Wechat.auth("snsapi_userinfo", function (response) {
                                // you may use response.code to get the access token.
                                alert(JSON.stringify(response));
                            }, function (reason) {
                                alert("Failed: " + reason);
                            });
                            return ;

                        default:
                            $ionicPopup.alert({
                                title: 'Not supported!',
                                template: 'Keep patient, young man.'
                            });

                            return ;
                    }
                }

                Wechat.share(params, function () {
                    alert("Success");
                }, function (reason) {
                    alert("Failed: " + reason);
                });
            };
})

.controller('AboutCtrl', function($scope) {});
