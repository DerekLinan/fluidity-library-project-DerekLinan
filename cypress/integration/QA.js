/// <reference types="cypress" />

describe('My First QA', () => {});

beforeEach(() => {
  cy.visit('localhost:1234');
});

it('1_validate_home_links_see_books', () => {
  cy.get('button').contains('See Books').click();
  cy.url().should('include', 'bookshelf');
});

it('2_validate_home_links_add_a_book', () => {
  cy.get('button').contains('Add a Book').click();
  cy.url().should('include', 'add-book');
});

it('1_validate_header_links_home', () => {
  cy.get('a').contains('Home').click();
  cy.url().should('eq', 'http://localhost:1234/');
});

it('2_validate_header_links_bookshelf', () => {
  cy.get('ul').get('a').contains('Bookshelf').click();
  cy.url().should('include', 'bookshelf');
});

it('3_validate_header_links_add_book', () => {
  cy.get('ul').get('a').contains('Add Book').click();
  cy.url().should('include', 'add-book');
});

it('1_validate_rating_bar', () => {
  cy.visit('localhost:1234/add-book');
  cy.url().should('include', 'add-book');
  cy.get('.rating__input').check('0.5');
  cy.get('svg[data-icon="star-half-alt"]').should('have.length', 1);
  cy.get('svg[data-icon="star"]').should('have.length', 4);
  cy.get('svg[data-prefix="far"]').should('have.length', 4);
});

it('2_validate_rating_bar', () => {
  cy.get('button').contains('Add a Book').click();
  cy.url().should('include', 'add-book');
  cy.get('.rating__input').check('3');
  cy.get('#rating-6').should('be.checked');
});

it('3_validate_rating_bar', () => {
  cy.get('a').contains('Bookshelf').click();
  cy.url().should('include', 'bookshelf');
  cy.get('.book-card:first').click();
  cy.get('.section__header').should('have.text', 'Eragon');
  cy.get('.rating__display-4 > svg').should('have.class', 'fa-star-half-alt');
  cy.get('.rating__input').check('0.5');
  cy.get('.rating__display-4 > svg').should('have.class', 'fa-star-half-alt');
  cy.get('.rating__input').check('5');
  cy.get('.rating__display-4 > svg').should('have.class', 'fa-star-half-alt');
});

it('1_validate_add_book', () => {
  cy.get('ul').get('a').contains('Add Book').click();
  cy.url().should('include', 'add-book');
  cy.get('button').contains('Add Book').click();
  cy.focused().should('have.class', 'add-title-field');
  cy.focused().type('Terrible QA');
  cy.get('button').contains('Add Book').click();
  cy.focused().should('have.class', 'add-author-field');
  cy.focused().type('Derek L.');
  cy.get('button').contains('Add Book').click();
  cy.url().should('include', 'bookshelf');
  cy.get('.book-card__title').should('contain.text', 'Terrible QA');
  cy.get('.book-card__author').should('contain.text', 'Derek L.');
});

// TODO webpage functionality not yet implemented
// it('1_validate_remove_book')
