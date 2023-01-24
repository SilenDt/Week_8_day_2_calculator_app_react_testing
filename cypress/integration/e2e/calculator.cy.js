describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })
  //the number buttons update the display of the running total

  it('should have working number buttons', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })
//Do the arithmetical operations update the display with the result of the operation?
  it('should display the result of arithmetical operations', () => {
    cy.get('#number2').click()
    cy.get('#operator-multiply').click()
    cy.get('#number4').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })
//Can multiple operations be chained together?

it('should display the result of multiple operations chained together', () => {
  cy.get('#number4').click()
  cy.get('#operator-multiply').click()
  cy.get('#number6').click()
  cy.get('#operator_add').click()
  cy.get('#number7').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '31')
})
// Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
it('should diplay result of a positive and a negative number', () => {
  cy.get('#operator-subtract').click()
  cy.get('#number5').click()
  cy.get('#operator_add').click()
  cy.get('#number6').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '1')
  })

xit('should display result of numbers that contain decimals', () => {
  cy.get('#number0').click()
  cy.get('#decimal').click()
  cy.get('#number6').click()
  cy.get('#operator_add').click()
  cy.get('#number0').click()
  cy.get('#decimal').click()
  cy.get('#number5').click()
  cy.get('#operator-equals').click()
  cy.get('.dislplay').should('contain', '1.1')

})

it('should display result that equals a large number', () => {
  cy.get('#number2').click()
  cy.get('#number0').click()
  cy.get('#number0').click()
  cy.get('#number0').click()
  cy.get('#number0').click()
  cy.get('#operator_add').click()
  cy.get('#number1').click()
  cy.get('#number0').click()
  cy.get('#number0').click()
  cy.get('#number0').click()
  cy.get('#number0').click()
  cy.get('#operator-equals').click()
  cy.get('.display').should('contain', '30000')
})

//What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).
xit('should display error if a number is divided by 0',() => {
  cy.get('#number7').click()
  cy.get('#operator-divide').click()
  cy.get('#number0').click()
  cy.get('#operator-equals').click()
  cy.get('display').should('contain', 'error')
})

})