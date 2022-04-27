describe('Usabilidade tela inicial', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com')
  })
  /*novos casos de teste*/
  it('verifica mensagens validacao', () => {
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')
    cy.get('button[type="submit"]').should('be.disabled')
  })
  it('Busca fotos no site AluraPic', () => {
    fazLoginNoSite(login, senha)
    escolheFoto(foto)
    fazDownloadFotoSelecionada()
  })
})
