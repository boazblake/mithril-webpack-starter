import m from 'mithril'
import { registerTask, loginTask } from './model'
import { log } from 'utilities'

export const Default = {
  state:{
    register:false
  },
  current: {
    email:'',
    password:''
  },

  register: () => {
    const onError = e => log('error')(e)
    const onSuccess = s => log('yes')(s)

    registerTask(Default.current).fork(onError, onSuccess)
  },

  login: () => {
    const onError = e => log('error')(e)
    const onSuccess = s => {
      log('yes')(s)
      localStorage.setItem(`_user`, JSON.stringify(s))
      return s
    }

    loginTask(Default.current).fork(onError, onSuccess)
  },

  logout: () => {

  }
}

module.exports = Default
