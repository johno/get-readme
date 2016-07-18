import test from 'ava'
import getReadme from './'

test('gets a readme', t => {
  t.plan(2)

  t.is(getReadme('fixtures'), 'Readme contents!\n')
  t.is(getReadme('fixtures/foo'), 'Foo readme contents!\n')
})

test('gets a readme from a relative dir', t => {
  t.is(getReadme('../get-readme/fixtures/foo'), 'Foo readme contents!\n')
})
