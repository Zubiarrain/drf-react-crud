import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { createTask, deleteTask,getTask,updateTask  } from '../api/tasks.api'
import {toast} from 'react-hot-toast'

function TaskFormPage() {
    const {
        register, 
        handleSubmit, 
        formState:{errors},
        setValue
    } = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const createToast = (title) => {
        toast.success(title, {
            position:'bottom-right',
            style:{
                background:"#101010",
                color:"#fff"
            }
        })
    }

    const onSubmit = handleSubmit(async data => {
        if (params.id){
            await updateTask(params.id, data)
            createToast('Tarea Actualizada')
            
        }else{
            await createTask(data)
            createToast('Tarea Creada')
        }
        navigate("/tasks");
    })
    useEffect(() =>{
        async function loadTask(){
            if (params.id){
                const {data:{title, description}} = await getTask(params.id)
                setValue('title', title)
                setValue('description', description)
            }
        }
        loadTask()
        
    },[])
    return (
        <div className=' max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="title" 
                {...register("title", {required:true})}
                className=' bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />

                {errors.title && <span>this field is required</span>}

                <textarea 
                rows="3" 
                placeholder="Description"
                {...register("description", {required:true})}
                className=' bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                >
                </textarea>        

                {errors.description && <span>this field is required</span>}

                <button
                className=' bg-indigo-500 p-3 rounded-lg block w-full mt-3'
                >Save</button>
            </form>
            {params.id && 
            <div className='flex justify-end'>
                <button
                className=' bg-red-500 p-3 rounded-lg w-48 mt-3'
                onClick={async () => {
                    const accepted = window.confirm('are you sure?')
                    if (accepted){
                        await deleteTask(params.id);
                        createToast('Tarea Eliminada')
                        navigate('/tasks');
                    }
                }
                
                }
                >Delete</button>
            </div>
            }
        </div>
    );
}

export  {TaskFormPage}
