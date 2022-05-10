function domainName(url){
    const u = new URL(url);
    return u;

}

module.exports = domainName;