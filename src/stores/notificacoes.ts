import { defineStore } from 'pinia'
import { iNotificacao } from '../interfaces/notificacao'
import { v4 as uuidV4 } from 'uuid'

export const useNotificacaoStore = defineStore('notificacao', {
  state: () => {
    return {
      notificacoes: [] as iNotificacao[],

      sucesso: 'is-success',
      alerta: 'is-warning',
      falha: 'is-warning'
    }
  },
  actions: {
    adicionaNotificacao(header: string, body: string) {
      const id = uuidV4()
      this.notificacoes.push({
        id,
        header,
        body,
        class: this.sucesso
      })

      setTimeout(() => {
        this.notificacoes = this.notificacoes.filter(n => n.id !== id)
      }, 3000)
    }
  }
})