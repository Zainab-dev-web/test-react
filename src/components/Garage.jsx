import React, { Fragment } from 'react';

const Garage = (props) => {
    const [controle, setControle] = useState("Non validé")


    if (controle == "Non validé") {
        controle = "Validé"
    }


    return (
        <Fragment>
            <button onClick={controle}>clique</button>

        </Fragment>

    );
}
export default Garage