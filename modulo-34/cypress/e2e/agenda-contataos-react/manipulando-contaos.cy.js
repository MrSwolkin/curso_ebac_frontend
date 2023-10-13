/// <reference types="cypress" />

describe('Deve manipular os contatos corretamente', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um novo contato a agenda', () => {
        cy.get('[type="text"]').type('Bruna Fernanda')
        cy.get('[type="email"]').type('bruna@gmail.com')
        cy.get('[type="tel"]').type('12345567')

        cy.get('.adicionar').click()
    })

    it('Deve editar dados de um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        
        cy.get('[type="text"]').clear()
        cy.get('[type="text"]').type('Roberto')

        cy.get('[type="email"]').clear()
        cy.get('[type="email"]').type('roberto@gmail.com')

        cy.get('[type="tel"]').clear()
        cy.get('[type="tel"]').type('551285845')

        cy.get('.alterar').click()

        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text','Roberto')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(2)').should('have.text' , '551285845')
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(3)').should('have.text', 'roberto@gmail.com')
    })

    it('Deve deletar um contato da agenda',() => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
    
})