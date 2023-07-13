import React, { useState, useEffect } from 'react';

const Output = () => {
    const [todo, setTodo] = useState([]);
    const [add, setAdd] = useState('');
    const [updateIndex,setupdateIndex]=useState(-1)
    const[updateValue,setUpdatevalue]=useState('')


    // useEffect(() => {
    //     console.log("todo =>", todo);
    // },[todo]);

    const takeInput = (e) => {
        setAdd(e.target.value);
    };

    const AddInput = (event) => {
        event.preventDefault();

        // console.log(add);

        setTodo(prevTodo => [
            ...prevTodo,
            // ...todo,
            add
        ]);
        // console.log(todo);

        setAdd('');

    };



    const deleteTodo = (i) => {
        // console.log("deleteTodo"+index)

        const updatedTodo = todo.filter((_, index) => {
            // console.log("update todo" + "  " + i + " " + _ + " " + index);
            return index !== i;
        });


        setTodo(updatedTodo);
        // console.log(updatedTodo)

    }

    const updateTodo = (index) =>{
        

        const updatedTodo = [...todo];
        updatedTodo[index] = updateValue;
        setTodo(updatedTodo);
        setupdateIndex(-1);
        setUpdatevalue('');
        console.log(updateValue);



    }



    return (
        <>
            <div className='bg-gold'>

                <div className='m-1 rounded'>
                    <input className='w-100 rounded' type='text' placeholder='Add Todo' value={add} onChange={takeInput} />
                </div>
                

                {
                    todo.map((item, index) => {
                        return (
                            <div className='d-flex ustify-content-between align-items-center w-100'>

                                {updateIndex === index ?
                                
                                    (<input value={updateValue} onChange={(e)=>setUpdatevalue(e.target.value)} placeholder='update value'></input>)
                                :

                               ( <div className='p-2 border m-1 border-success d-inline-block w-100  rounded bg-success'>
                                <p key={index}>{item}</p></div>)  

                                }



                               

                                <div className=' d-flex justify-content-center align-items-center'>  <input type='checkbox'></input></div>

                                <div className='rounded container d-flex justify-content-end align-items-center'>
                                    <div> <button className='rounded' onClick={() => deleteTodo(index)}>Delete</button></div>


                                    {updateIndex === index ?
                                        (
                                            <div> <button className='rounded' onClick={()=>updateTodo(index)}>Save</button></div>
                                         )
                                        :
                                        (
                                            <div> <button className='rounded' onClick={() => setupdateIndex(index)}>Update</button></div>
                                        )

                                        
                                   }
                                   



                                </div>




                            </div>
                        )

                    })
                }
                <div className=' d-flex justify-content-center align-items-center w-100'>
                    <button onClick={AddInput}>Add Todo</button>

                </div>

            </div>
        </>
    );
};

export default Output;


// import React, { useState } from 'react';

// const Output = () => {
//     const [todo, setTodo] = useState([]);
//     const [add, setAdd] = useState('');
//     const [updateIndex, setUpdateIndex] = useState(-1);
//     const [updateText, setUpdateText] = useState('');

//     const takeInput = (e) => {
//         setAdd(e.target.value);
//     };

//     const AddInput = (event) => {
//         event.preventDefault();
//         setTodo((prevTodo) => [...prevTodo, add]);
//         setAdd('');
//     };

//     const deleteTodo = (index) => {
//         const updatedTodo = todo.filter((_, i) => i !== index);
//         setTodo(updatedTodo);
//     };

//     const updateTod  = (index) => {
//         const updatedTodo = [...todo];
//         updatedTodo[index] = updateText;
//         setTodo(updatedTodo);
//         setUpdateIndex(-1);
//         setUpdateText('');
//     };

//     return (
//         <>
//             <div className='bg-gold'>
//                 <div className='m-1 rounded'>
//                     <input className='w-100 rounded' type='text' placeholder='Add Todo' value={add} onChange={takeInput} />
//                 </div>

//                 {todo.map((item, index) => (
//                     <div className='d-flex justify-content-between align-items-center w-100' key={index}>
//                         <div className='p-2 border m-1 border-success d-inline-block w-100 rounded bg-success'>

//                             {index === updateIndex ? (
//                                 <input type='text' value={updateText} onChange={(e) => setUpdateText(e.target.value)} />
//                             ) : (
//                                 <p>{item}</p>
//                             )}

//                         </div>

//                         <div className='d-flex justify-content-center align-items-center'>
//                             <input type='checkbox' />
//                         </div>

//                         <div className='rounded container d-flex justify-content-end align-items-center'>
//                             {index === updateIndex ? (
//                                 <div>
//                                     <button className='rounded' onClick={() => updateTodo(index)}>Save</button>
//                                 </div>
//                             ) : (
//                                 <div>
//                                     <button className='rounded' onClick={() => setUpdateIndex(index)}>Update</button>
//                                 </div>
//                             )}
//                             <div>
//                                 <button className='rounded' onClick={() => deleteTodo(index)}>Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}

//                 <div className='d-flex justify-content-center align-items-center w-100'>
//                     <button onClick={AddInput}>Add Todo</button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Output;
