/**
 * Created by Fabio on 18/06/2017.
 */
if(typeof process === 'object') {
    var assert = require('assert');
    var be = require('../index');
}

describe('commonjsEnv', function () {
    if(typeof window === 'undefined')
        it('should be return true', function () {
            var result = be.commonjsEnv();
            console.log(result);
            assert.equal(result, true);
        })
});

describe('isBrowser', function () {
    if(typeof window === 'undefined')
        it('should be return false', function () {
            var result = be.browserEnv();
            console.log(result);
            assert.equal(result, false);
        })
});

describe('android', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/602.1.38 ' +
            '(KHTML, like Gecko) Version/10.0 Mobile/14A5297c Safari/602.1';
        var result = be.android(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.android(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('range == 4, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) ' +
            'Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.android('==4', userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('windows phone 10, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586';
        var result = be.android(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return error', function (done) {
        try {
            be.android();
            if(navigator)
                done();
        } catch (e) {
            done();
        }
    });
});

describe('chrome', function () {
    it('with range, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';
        var result = be.chrome('>=58', userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('without range should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('safari, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/603.2.4 (KHTML, like Gecko) Version/10.1.1 Safari/603.2.4';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('opera, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.86 Safari/537.36 OPR/46.0.2597.32';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('edge, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063';
        var result = be.chrome(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('chromeIOS', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.79 Mobile/14D27 Safari/602.1';
        var result = be.chromeIOS(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('opera', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.52 Safari/537.36 OPR/15.0.1147.100';
        var result = be.opera(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('old agent, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 5.1) Gecko/20100101 Firefox/14.0 Opera/12.0';
        var result = be.opera(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('old agent, should be return true (2)', function () {
        var userAgent= 'Opera/9.80 (Windows NT 6.0; U; pl) Presto/2.10.229 Version/11.62';
        var result = be.opera(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('old agent, should be return true (3)', function () {
        var userAgent= 'Mozilla/4.0 (compatible; MSIE 5.0; Linux 2.4.19-4GB i686) Opera 6.03 [en]';
        var result = be.opera(userAgent);
        console.log(result);
        assert.equal(result, true);
    });

    it('edge, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063';
        var result = be.opera(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('firefox', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1';
        var result = be.firefox(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('old agent, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 5.1; rv:8.0; en_us) Gecko/20100101 Firefox/8.0';
        var result = be.firefox(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('old agent, should be return false (2)', function () {
        var userAgent= 'Opera/9.80 (Windows NT 6.0; U; pl) Presto/2.10.229 Version/11.62';
        var result = be.firefox(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('opera agent, should be return false (3)', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 5.1) Gecko/20100101 Firefox/14.0 Opera/12.0';
        var result = be.firefox(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('safari', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A';
        var result = be.safari(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('safari mobile, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) GSA/24.0.150344369 Mobile/14D27 Safari/602.1';
        var result = be.safari(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';
        var result = be.safari(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('old agent, should be return false (2)', function () {
        var userAgent= 'Opera/9.80 (Windows NT 6.0; U; pl) Presto/2.10.229 Version/11.62';
        var result = be.safari(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('opera should be return false (3)', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 6.0; rv:2.0) Gecko/20100101 Firefox/4.0 Opera 12.14';
        var result = be.safari(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('edge, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063';
        var result = be.safari(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('edge', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063';
        var result = be.edge(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('range >, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063';
        var result = be.edge('>14', userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('range <, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36 Edge/15.15063';
        var result = be.edge('<14', userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ie', function () {
    it('11, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
        var result = be.ie(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('range < 11, should be return true', function () {
        var userAgent= 'Mozilla/4.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/5.0)';
        var result = be.ie('<11', userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('range == 8, should be return true', function () {
        var userAgent= 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; msn OptimizedIE8;ZHCN)';
        var result = be.ie('==8', userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('safariMobile', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/22.1.146053689 Mobile/14D27 Safari/600.1.4';
        var result = be.safariMobile(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('Chrome iOS, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) CriOS/56.0.2924.79 Mobile/14D27 Safari/602.1';
        var result = be.safariMobile(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('iphone', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/22.1.146053689 Mobile/14D27 Safari/600.1.4';
        var result = be.iphone(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
        var result = be.iphone(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ipad', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.ipad(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/22.1.146053689 Mobile/14D27 Safari/600.1.4';
        var result = be.ipad(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ipod', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPod touch; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.ipod(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.ipod(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('ios', function () {
    it('iPod, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPod touch; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.ios(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('iPad, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.ios(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('iPhone, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_2_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) GSA/22.1.146053689 Mobile/14D27 Safari/600.1.4';
        var result = be.ios(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
        var result = be.ios(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('linux', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36';
        var result = be.linux(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
        var result = be.linux(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('windows', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36';
        var result = be.windows(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';
        var result = be.windows(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('mac', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.0 Safari/537.36';
        var result = be.mac(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36';
        var result = be.mac(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('androidTablet', function () {
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/47.1.79 like Chrome/47.0.2526.80 Safari/537.36';
        var result = be.androidTablet(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.androidTablet(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
});

describe('androidPhone', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/47.1.79 like Chrome/47.0.2526.80 Safari/537.36';
        var result = be.androidPhone(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.androidPhone(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('windowsPhone', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 4.4.3; KFTHWI Build/KTU84M) AppleWebKit/537.36 (KHTML, like Gecko) Silk/47.1.79 like Chrome/47.0.2526.80 Safari/537.36';
        var result = be.windowsPhone(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586';
        var result = be.windowsPhone(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('windowsTablet', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like Gecko';
        var result = be.windowsTablet(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)';
        var result = be.windowsTablet(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('blackberry', function () {
    it('should be return false', function () {
        var userAgent= 'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like Gecko';
        var result = be.blackberry(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('should be return true', function () {
        var userAgent= 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+)';
        var result = be.blackberry(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('mobile', function () {
    it('windows phone, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows Phone 8.1; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 635) like Gecko';
        var result = be.mobile(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('BlackBerry, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.1.0.346 Mobile Safari/534.11+)';
        var result = be.mobile(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('android, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Linux; Android 5.1.1; SM-G928X Build/LMY47X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.83 Mobile Safari/537.36';
        var result = be.mobile(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('tablet', function () {
    it('windows, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)';
        var result = be.tablet(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('ipad, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.tablet(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});

describe('desktop', function () {
    it('windows phone, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0; Touch)';
        var result = be.desktop(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('ipad, should be return false', function () {
        var userAgent= 'Mozilla/5.0 (iPad; CPU OS 10_2_1 like Mac OS X) AppleWebKit/602.4.6 (KHTML, like Gecko) Version/10.0 Mobile/14D27 Safari/602.1';
        var result = be.desktop(userAgent);
        console.log(result);
        assert.equal(result, false);
    });
    it('windows pc, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36';
        var result = be.desktop(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
    it('mac, should be return true', function () {
        var userAgent= 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2227.1 Safari/537.36';
        var result = be.desktop(userAgent);
        console.log(result);
        assert.equal(result, true);
    });
});