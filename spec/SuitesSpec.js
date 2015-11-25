import Suites from '../app/suites'

describe('Suites module', () => {
    let suites

    beforeEach(function () {
        let fakeStorage = {
            getItem: (item) => { 
                return '[{"id": "111"}, {"id": "222"}]' 
            },
            setItem: (item, data) => { 

            }
        }
        suites = new Suites(fakeStorage)
    })

    describe('#all', () => {
        it('returns an array', () => {
            expect(suites.all.length).toEqual(2)
        })
    })
})
