import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group'

export const Alert = () => {
    const { alert, hide } = useContext(AlertContext)

    return (
        <CSSTransition in={alert.visible} timeout={800} 
        mountOnEnter unmountOnExit
        classNames={'alert'}>
            <div className={`alert alert-${alert.type || "warning"} alert-dismissible`} >
                <strong>Внимание: &nbsp;</strong>
                {alert.text}
                <button onClick={hide} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>

    )
}