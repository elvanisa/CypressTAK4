describe('Reqres Test', () => {

    function randomName(){
        const randomString = Math.random().toString(36).substring(3,10)
        const name = randomString + "User"
        return name
    }

    let name = randomName()

    it('Get List User', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            expect(response.status).to.equal(200)
        })
    })
    it('Create User', () => {
        cy.log('name' + name)
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            //header: {
            //    Authorization: ''
            //},
            body: {
                "name": name,
                "job": "Quality Assurance"
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            //expect(response.body).has.property("name", "elvanisa")
            expect(response.body).has.property("job", "Quality Assurance")
        })
    })
  })