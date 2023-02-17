import { validatorTemplateName } from './template-name.validator'

describe('validatorTemplateName', () => {
  test('snapshot', () => {
    expect(validatorTemplateName).toMatchSnapshot('snapshot')
  })
})
