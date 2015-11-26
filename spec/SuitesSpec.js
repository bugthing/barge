import Suites from '../app/suites'

describe('Suites module', () => {
    let suites

    beforeEach(function () {
        let fakeStorage = {
            getItem: (item) => {
                return '[{"id": "123", "containers": []}]'
            },
            setItem: (item, data) => {

            }
        }
        suites = new Suites(fakeStorage)
    })

    describe('all', () => {
        it('returns all parsed suites', () => {
            expect(suites.all).toEqual(jasmine.any(Array))
            expect(suites.all.length).toEqual(1)
        })
    })

    describe('save', () => {
        it('json stringify and stores', () => {
            // TBA - assert it save right
            // TBA - assert json looks right
            expect(suites.save()).not.toBe(undefined)
        })
    })

    describe('newSuite', () => {
        let newSuite
        beforeEach(() => {
            newSuite = suites.newSuite()
        })

        it('adds to all suites', () => {
            expect(suites.all.length).toEqual(2)
        })

        it('looks like a suite', () => {
            expect(newSuite.hasOwnProperty('id')).toBe(true)
            expect(newSuite.hasOwnProperty('name')).toBe(true)
            expect(newSuite.hasOwnProperty('containers')).toBe(true)
        })

        it('sets containers', () => {
            expect(newSuite.containers).toEqual(jasmine.any(Array))
            expect(newSuite.containers.length).toEqual(1)
        })

        describe('Container', () => {
            let container
            beforeEach(() => {
                container = newSuite.containers[0]
            })

            it('looks like a container', () => {
                expect(container.hasOwnProperty('id')).toBe(true)
                expect(container.hasOwnProperty('name')).toBe(true)
                expect(container.hasOwnProperty('links')).toBe(true)
            })
        })
    })

    describe('findSuite', () => {
        it('finds ands returns a suite', () => {
            let found = suites.findSuite("123")
            expect(found.id).toEqual("123")
        })
    })
})
