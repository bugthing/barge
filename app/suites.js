import LocalStorage from 'localStorage'
import uuid from 'node-uuid'

class Container {
    constructor(id = uuid.v4(), name, links = [], envs = []) {
        this.id = id
        this.name = undefined
        this.links = links
        this.envs = envs
    }
}

class Suite {
    constructor(id = uuid.v4(), name, containers = []) {
        this.id = id
        this.name = name
        this.containers = containers.map( (c) => { new Container(c.uuid, c.links) } )
    }
}

class Suites {
    constructor(storage) {
        this.storage = storage || LocalStorage
        let data = this.deserialize()
        this.suites = data.map( (d) => { return new Suite(d.id, d.name, d.containers) });
    }

    deserialize() {
        let storedJson = this.storage.getItem('suites')
        if(storedJson) return JSON.parse(storedJson)
        return []
    }

    get all() {
      return this.suites
    }

    newSuite() {
        this.suites.push(new Suite())
        return this.suites.slice(-1)[0]
    }

    findSuite(id) {
        let found
        this.all.forEach( (s) => { if(s.id === id) found = s } )
        return found
    }

    save() {

        let suites = []
        this.all.forEach( (s) => {
            let containers = []
            s.containers.forEach( (c) => {
                containers.push({
                    id: c.id,
                    links: c.links
                })
            })
            suites.push({
                id: s.id,
                name: s.name,
                containers: containers
            })
        })

        LocalStorage.setItem('suites', JSON.stringify(suites))
        return true
    }
}

export default Suites
