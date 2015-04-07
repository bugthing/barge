import LocalStorage from 'localStorage'

class Docker {
    constructor() {
        console.log('new docker')
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
