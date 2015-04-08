
import http from 'http'

export default function(host) {
    return new Promise( (resolve, reject) => {

        var options = {
            protocol: 'http:',
            hostname: host,
            port: 4375,
            path: '/_ping',
            headers: {
                'Origin': 'http://localhost'
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
