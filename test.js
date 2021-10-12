const checkRows = require('./app.js')

state.gameBoard = ['X','X','X',0,1,0,1,0,1,0]

test('tests if the first row is filled', () => {
  expect(checkRows(2,3)).toBe(true)
})