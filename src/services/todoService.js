export default function TodoService(){
    let todos = []

    const create = (todo) => {
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                if(todo){
                    todos = [...todos, todo]
                    resolve('Sukses Menambahkan Data')
                }else{
                    reject('Todo Tidak Boleh Kosong')
                }
            }, 1500)
        })
    }

    const getAll = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                if(todos.length > 0){
                    resolve(todos)
                }else{
                    reject('Todo Kosong')
                }
            }, 2000)
        })
    }

    const update = (todo) => {
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                if(todo){
                    todos = todos.map(val => {
                        if(val.id === todo.id){
                            return todo
                        }else{
                            return val
                        }
                    })
                    resolve(todos)
                }else{
                    reject('Todo Tidak Boleh Kosong')
                }
            }, 1500)
        })
    }

    const deleteTodo = (id) => {
        return new Promise ((resolve, reject) => {
            setTimeout(()=>{
                if(id){
                    todos = todos.filter(val => val.id !== id)
                    resolve(todos)
                }else{
                    reject('Id Tidak Boleh Kosong')
                }
            }, 1500)
        })
    }

    return {
        create,
        getAll,
        update,
        deleteTodo
    }
}