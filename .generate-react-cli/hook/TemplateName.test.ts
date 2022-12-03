import { useTemplateName } from './template-name.hook'

describe('useTemplateName', () => {
  test('snapshot', () => {
    expect(useTemplateName).toMatchSnapshot('snapshot')
  })
})
