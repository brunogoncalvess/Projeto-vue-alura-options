import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid'
import iProjeto from "../interfaces/projeto";

export const useProjetoStore = defineStore('projeto', {
  state: () => {
    return {
      dadoTeste: 0,
      projetos: [] as iProjeto[]
    }
  },

  actions: {
    increment() {
      this.dadoTeste++
    },
    adicionaProjeto() {
      return (nomeProjeto: string): void => {
        this.projetos.push({
          id: uuidv4(),
          nome: nomeProjeto
        })
      }
    },
    editaProjeto() {
      return (nomeProjeto: string, id: string): void => {
        this.projetos.find(p => p.id === id)!.nome = nomeProjeto
      }
    },
    deletaProjeto() {
      return (id: string) => {
        const index = this.projetos.indexOf(this.projetos.find(p => p.id === id) as iProjeto)
        this.projetos.splice(index, 1)
      }
    }
  }
})