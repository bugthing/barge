import Suites from '../app/suites'

describe('Suites module', () => {
    let suites

    beforeEach(function () {
        let fakeStorage = {
            getItem: (item) => {
                return '[{"id": "123"}]'
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
        })
    })

    describe('findSuite', () => {
        it('finds ands returns a suite', () => {
            let found = suites.findSuite("123")
            expect(found.id).toEqual("123")
        })
    })
})
