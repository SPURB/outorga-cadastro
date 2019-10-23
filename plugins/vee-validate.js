import { extend, localize } from 'vee-validate'
import { required, email, alpha, numeric, between, min, max } from 'vee-validate/dist/rules'
import ptbr from 'vee-validate/dist/locale/pt_BR.json'

extend('required', {
  ...required,
  message: 'Este campo é obrigatório'
})

extend('between', {
  ...between,
  message: 'O número de caracteres está incorreto'
})

extend('min', {
  ...min,
  message: 'Inclua o valor mínimo de caracteres'
})
extend('max', {
  ...max,
  message: 'Não ultrapasse o valor máximo de caracteres'
})

extend('email', {
  ...email,
  message: 'Inclua um email válido'
})

extend('alpha', {
  ...alpha,
  message: 'Este campo aceita apenas letras do alfabeto (aA-zZ)'
})

extend('numeric', {
  ...numeric,
  message: 'Inclua um valor numérico válido'
})

localize({ ptbr })
