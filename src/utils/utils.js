import moment from 'moment'


export function logMsg(...msg){
      if(process.env.NODE_ENV !== 'production')
      console.log(...msg)
}

export function dateFormat(timestamp,formatStr = "YYYY-MM-DD HH:mm:ss"){
    
      let comTime = moment.unix(timestamp).format(formatStr)
      logMsg(`转换后的时间 ${comTime}`)
      return comTime
}

export function urlEncode(param, key, encode){
      if (param==null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param); 
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += urlEncode(param[i], k, encode)
        }
    }
    return paramStr;
}