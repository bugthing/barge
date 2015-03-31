import LocalStorage from 'localStorage'

class Docker {
    constructor() {
        console.log('new docker')
    }
    ping(host) {
        // TODO - see if we can contact docker (via host) .. return boolean
        return true
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
