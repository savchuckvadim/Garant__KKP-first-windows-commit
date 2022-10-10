
import "./buttons.css"
import Button from '@material-ui/core/Button';
import React from 'react';
import { PROF } from "../../redux/redusers/global-parameters/global-parameters-reducer";



const ComplectButtons = (props) => {

    let buttons = [];
    if (props.currentComplectsType === PROF) {
        props.allComplects.forEach((complect, index) => {
            buttons.push(
                <Button
                    key={`btn-${index}`}
                    style={props.style[index]}
                    onClick={() => {
                        props.createComplect(
                            complect,
                            index,
                            props.ods,
                            props.currentOd,
                            props.currentTheme,
                            props.numberOfOD,
                            props.typeOfContract,
                            props.infoblocks,
                            props.er,
                            props.legalTech,
                            props.freeBlocks,
                            props.consalting,
                            props.currentSupplyName)

                    }

                    }
                    className={complect.className}
                    number={index}
                    type="button" > {complect.name}
                    < div className="ellipseWrapper" >
                        <img className="ellipse" src={props.ellipse[index]} alt=""></img>
                    </div >
                </Button >)
        })
    } else {
        buttons = props.universalComplects.complects.map((complect, index) => (

            <Button
                key={`btn-${index}`}
                className={props.universalClassNames[index]}
                number={index}
                type="button" >{complect.name}
                <div className="ellipseWrapper">
                    {index === props.universalComplects.complects.length - 1 &&
                        <img className="ellipse" src={props.ellipse[1]} alt=""></img>}
                </div>
            </Button>)
        )
    }


    return (
        buttons
    )
}

export default ComplectButtons