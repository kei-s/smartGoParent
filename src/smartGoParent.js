function getParent(url,count) {
  function getParentPath(path) {
    if (!path) return;
      path = path.replace(/\/$/,'').replace(/^\/+/,'');
    if (path.indexOf('#')>0) {
      return path.replace(/#.*/,'');
    }
    if (path.indexOf('?')>0) {
      return path.replace(/\?.*/,'');
    }
    path = path.replace(/\/+$/,'');
    if (path.indexOf('/')>0) {
      return path.replace(/\/[^\/]*$/,'/');
    }
  }
  function getParentHost(host) {
    if (!/\./.test(host) || /^[0-9+.:]+$/.test(host)){
      return host;
    }
    let hostSuffix='';
    let x=host.lastIndexOf(':');
    if (x>0) {
      hostSuffix = host.substr(x);
      host = host.substr(0,x);
    }
    hostSuffix = host.substr(host.length-6)+hostSuffix;
    host = host.substr(0,host.length-6);
    return host.replace(/[^.]*\./,'')+hostSuffix;
  }
  let parent = url;
  let regexp = new RegExp('([a-z]+:///?)([^/]*)(/.*)');
  let [,scheme,host,path] = regexp.exec(url);
  path = path.replace(/\/$/,'').replace(/^\/+/,'');
  for (let i = 0; i < count; i++) {
    if (path) {
      if (path = getParentPath(path)) {
        parent = scheme+host+'/'+path;
      }
      else {
        parent = scheme+host+'/';
      }
    }
    else {
      host = getParentHost(host);
      parent = scheme+host+'/';
    }
  }
  return parent;
}
