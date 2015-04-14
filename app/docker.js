import LocalStorage from 'localStorage'
import http from 'http'

class Docker {
    constructor(props) {
        console.log('new docker')

        super(props);

        this.headers = { 'Origin': 'http://www.127-0-0-1.org.uk:8080',
                         'X-Requested-With': 'XMLHttpRequest',
                         'Content-Type': 'application/json',
                         'Accept': 'application/json',
                         'X-Registry-Auth': 'dGhpbmc6c3R1ZmY=' }

        this.fetch  = function(path, arg1, arg2) {
          let that = this

          let dockerHost = arg1
          let dockerPort = arg2
          if(that.host) dockerHost = that.host
          if(that.port) dockerPort = that.port

          return new Promise( (resolve, reject) => {

            var options = {
                protocol: 'http:',
                hostname: dockerHost,
                port: dockerPort,
                path: '/' + path,
                headers: that.headers
            };

            http.get(options, (res) => {
                let data = ''
                res.on("data", (chunk) => { data += chunk });
                res.on("end", () => {
                    if(res.statusCode == 200) {
                        let obj = {}
                        if(data != 'OK') obj = JSON.parse(data)
                        console.log('FETCH GOOD:' + obj)
                        resolve(obj)
                    } else {
                        console.log('FETCH BAD')
                        reject()
                    }
                });
            });
          })
        }
    }

    set host(host) {
        console.log('setting docker host:'+host)
        if ( host == null ) {
            LocalStorage.removeItem('dockerHost')
        } else {
            LocalStorage.setItem('dockerHost', host)
        }
        return host
    }
    get host() {
        return LocalStorage.getItem('dockerHost')
    }

    set port(port) {
        console.log('setting docker port:'+port)
        if ( port == null ) {
            LocalStorage.removeItem('dockerPort')
        } else {
            LocalStorage.setItem('dockerPort', port)
        }
        return port
    }
    get port() {
        return LocalStorage.getItem('dockerPort')
    }

};

export default new Docker()
