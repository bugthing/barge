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
                    'Origin': 'http://localhost'
                }
            };

            http.get(options, function (res) {
                res.on("end", function () {
                    if(res.statusCode == 200) {
                        console.log('CONTAINERS GOOD')
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
