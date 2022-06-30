import { NextComponentType, NextPage, NextPageContext } from "next"
import { useDeleteItemMutation } from "../../services/api";






 const Item: Function  = (  props: any)=>{
    const [callDeleteItem, { isLoading: isDeleting}] = useDeleteItemMutation()

    
    const deleteItem = async (id: number)=>{
        let data = { "id" : id}
        console.log(data)

        let response = await callDeleteItem(data).unwrap();
        console.log(response) ;
    }

    
    
    // if(isDeleting)
    //     return ( <p> Loading</p>)
    
    // else
    return (
       <li id={props.name}> { props.name } <button onClick={()=>deleteItem(props.id) }> < i>{isDeleting ? 'Deleting...' : 'Delete'}</i> </button></li> 
    )
}


export default Item;