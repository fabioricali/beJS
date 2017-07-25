export interface EnvsMulti {
    mobile(agent?: string): boolean;

    tablet(agent?: string): boolean;

    desktop(agent?: string): boolean;
}

export interface EnvsSingle {    commonjsEnv(): boolean;

    browserEnv(): boolean;

    amdEnv(): boolean;

    navigator(): boolean;

    onLine(): boolean;

    android(range?: string, agent?: string): boolean;

    androidTablet(range?: string, agent?: string): boolean;

    androidPhone(range?: string, agent?: string): boolean;

    chrome(range?: string, agent?: string): boolean;

    chromeIOS(range?: string, agent?: string): boolean;

    opera(range?: string, agent?: string): boolean;

    firefox(range?: string, agent?: string): boolean;

    edge(range?: string, agent?: string): boolean;

    safari(range?: string, agent?: string): boolean;

    safariMobile(range?: string, agent?: string): boolean;

    ie(range?: string, agent?: string): boolean;

    windowsPhone(range?: string, agent?: string): boolean;

    windowsTablet(range?: string, agent?: string): boolean;

    blackberry(range?: string, agent?: string): boolean;

    iphone(range?: string, agent?: string): boolean;

    ipad(range?: string, agent?: string): boolean;

    ipod(range?: string, agent?: string): boolean;

    ios(range?: string, agent?: string): boolean;

    mac(range?: string, agent?: string): boolean;

    linux(range?: string, agent?: string): boolean;

    windows(range?: string, agent?: string): boolean;
}

export interface EnvsAll extends EnvsMulti, EnvsSingle{}