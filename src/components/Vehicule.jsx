import React, {Fragment , useState} from 'react';


const Vehicule=(props)=>{

    const [model , setModel]=useState("Non validé")

    // const model=(props)=>{
    //     if(props.etat ==" Non validé "){
    //         props.etat.style.borderColor="red"
    //     }
    // }
    return(
        <Fragment>
            
            {model == " Non validé "? "border-red": ""}
        </Fragment>

    );
}
export default Vehicule