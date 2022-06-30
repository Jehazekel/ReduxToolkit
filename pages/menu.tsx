import { NextPage } from "next"
import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { useGetMenuQuery, useInsertItemMutation } from "../services/api";
import Item from "./components/updateMenu";

const Menu: NextPage = ()=>{

    
    const [callInsertItem, {isLoading: isUpdating } ] = useInsertItemMutation()
    const insertItem = async (name: string)=>{
        let data = { "name" : name}
        console.log(data)

        let response = await callInsertItem(data)
        console.log(response);
    }


    // #GET QUERY USING RTK 

    let {data=[], isLoading, isFetching}  =  useGetMenuQuery({});

    console.log(data);
    //console.log( typeof(Item))

    let newItem = ''
    let onChange = (e:any)=>{
        let name = e.target.value
        console.log( name)
        newItem = name
    }
    return (
        <div id="app">
            <p>Welcome to the Menu</p>
            <ul>
               { data.map( (el:any)=>{ return <Item name={el.name} id={el.id}> </Item>})} 
            </ul>
            
            <br/> <br/>
            <input id='newItem' type='text' onChange={onChange}/>
            <button onClick={()=> insertItem(newItem)}>  {isUpdating ? 'Adding Item...' : 'ADD ITEM '}</button>
        </div>
    );
}

export default  Menu;