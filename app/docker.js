import LocalStorage from 'localStorage'
import http from 'http'

class Docker {
    constructor() {
        console.log('new docker')

        this.fetch  = function(path, arg) {
          let that = this

          let dockerHost = arg
          if(that.host) dockerHost = that.host

          return new Promise( (resolve, reject) => {

            var options = {
                protocol: 'http:',
                hostname: dockerHost,
                port: 4375,
                path: '/' + path,
                headers: {
                    'Origin': 'http://www.127-0-0-1.org.uk:8080',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Registry-Auth': 'dGhpbmc6c3R1ZmY='
                }
            };

            http.get(options, (res) => {
                let data = ''
                res.on("data", (chunk) => { data += chunk });
                res.on("end", () => {
                    let obj = {}
                    //obj = JSON.parse(data)
                    if(res.statusCode == 200) {
                        console.log('CONTAINERS GOOD:' + obj)
                        resolve(['123','432'])
                    } else {
                        console.log('CONTAINERS BAD')
                        reject()
                    }
                });
            });
          })
        }
    }

    set host(host) {
        console.log('setting docker host:'+host)
        if ( host == null ){
            LocalStorage.removeItem('dockerHost')
        } else {
            LocalStorage.setItem('dockerHost', host)
        }
        return host
    }
    get host() {
        return LocalStorage.getItem('dockerHost')
    }

}

export default new Docker()
