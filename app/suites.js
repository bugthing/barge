import LocalStorage from 'localStorage'
import uuid from 'node-uuid'

class Container {
    constructor(id = uuid.v4(), name, links = [], envs = []) {
        this.id = id
        this.name = name
        this.links = links
        this.envs = envs
    }
}

class Suite {
    constructor(id = uuid.v4(), name, containers = []) {
        this.id = id
        this.name = name
        this.containers = containers
    }

    newContainer() {
		let container = new Container()
        this.containers.push(container)

        return this.containers.slice(-1)[0]
    }
}

class Suites {
    constructor(storage) {
        this.storage = storage || LocalStorage
        this.suites = []
        this.load()
    }

    get all() {
      return this.suites
    }

    newSuite() {
		let suite = new Suite()
		suite.newContainer()

        this.suites.push(suite)

        return this.suites.slice(-1)[0]
    }

    findSuite(id) {
        let found
        this.all.forEach( (s) => { if(s.id === id) found = s } )
        return found
    }

    load() {
        let data = []
        let storedJson = this.storage.getItem('suites')
        if(storedJson) data = JSON.parse(storedJson)
		data.map( (s) => {

			let containers = []
			s.containers.forEach( (c) => {
				containers.push( new Container(c.id, c.name, c.links) )
			});

        	this.suites.push(new Suite(s.id, s.name, containers))
		})
    }

    save() {
		let json = JSON.stringify(this.all)
		console.log(json)
        this.storage.setItem('suites', json)
		return json
    }
}

export default Suites
