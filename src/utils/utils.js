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