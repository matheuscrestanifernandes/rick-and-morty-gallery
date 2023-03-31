export { };

describe('Teste da API', () => {
  it('Must fetch characters per page', () => {
    cy.request('GET', 'https://rickandmortyapi.com/api/character/?page=2')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('info');
        expect(response.body).to.have.property('results');
        expect(response.body.results).to.be.an('array');
      });
  });

  it('Must search characters by status', () => {
    cy.request('GET', 'https://rickandmortyapi.com/api/character/?status=alive')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('info');
        expect(response.body).to.have.property('results');
        expect(response.body.results).to.be.an('array');
      });
  });

  it('Must search characters by gender', () => {
    cy.request('GET', 'https://rickandmortyapi.com/api/character/?gender=female')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('info');
        expect(response.body).to.have.property('results');
        expect(response.body.results).to.be.an('array');
      });
  });
});
