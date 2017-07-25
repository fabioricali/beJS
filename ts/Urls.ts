export interface UrlsAll {
    url(value: string): boolean;

    httpUrl(value: string): boolean;

    httpsUrl(value: string): boolean;

    urlEncoded(value: string): boolean;

    ftpUrl(value: string): boolean;

    ftpsUrl(value: string): boolean;

    domain(value: string): boolean;
}