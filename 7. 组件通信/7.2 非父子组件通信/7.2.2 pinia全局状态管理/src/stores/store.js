import { defineStore } from "pinia";

export const useStore = defineStore('useStore', {
    state() {
        return {
            name: 'zy',
            age: 22
        }
    },
    getters: {
        helloText: (state) => {
            return 'Hello ' + state.name
        }
    }
    ,
    actions: {
        fn() {
            alert('test')
        }
    }
})


