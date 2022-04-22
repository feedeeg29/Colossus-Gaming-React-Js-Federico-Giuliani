import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Decision() {
    return (
        <>
            <Button variant='dark'><Link to={'/Cart/Cart'}>Finalizar Compra</Link></Button>
            <Button variant='info'><Link to={'/category'}>Continuar Comprando</Link></Button>
        </>
    )
}
