import test from 'ava'
import getReadme from './'

test('gets a readme', async t => {
  t.plan(2)

  t.is(await getReadme('fixtures'), 'Readme contents!\n')
  t.is(await getReadme('fixtures/foo'), 'Foo readme contents!\n')
})

test('gets a readme from a relative dir', async t => {
  t.is(await getReadme('../get-readme/fixtures/foo'), 'Foo readme contents!\n')
})

test('returns null when no readme exists', async t => {
  t.falsy(await getReadme('fixtures/no-readme'))
})
