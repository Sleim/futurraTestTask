import { extend } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: (): string => 'Field is required'
})

extend('min', {
  ...min,
  message: (): string => 'Invalid number'
})
