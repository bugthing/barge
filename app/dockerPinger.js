
import http from 'http'

export default function(host) {
    return new Promise( (resolve, reject) => {

        var options = {
            protocol: 'http:',
            hostname: host,
            port: 2375,
            path: '/_ping',
            headers: {
                'Origin': 'http://www.127-0-0-1.org.uk:8080',
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Registry-Auth': 'dGhpbmc6c3R1ZmY='
            }
        };

        http.get(options, function (res) {
            res.on("end", function () {
                if(res.statusCode == 200) {
                    console.log('GOOD')
                    resolve(host)
                } else {
                    console.log('BAD')
                    reject()
                }
            });
        });
    })
}
