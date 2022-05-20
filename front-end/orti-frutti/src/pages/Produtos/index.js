import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { Spin } from 'antd';

import './style.css'
import { Button, Card } from 'antd';

export default function Produtos() {
    const [produtos, setProdutos] = useState([])
    const [removeSpinning, setSpinning] = useState(false)
    const history = useHistory()
    const number = produtos.length
    console.log(produtos.length)

    useEffect(() => {
        api.get('/item')
            .then((response) =>
                setProdutos(response.data),
                setSpinning(false)
            )
            .catch((err) => {
                console.log("Aconteceu um erro inesperado" + err)
            })
    }, [])

    return (
        <div className='produto__container__prod'>
            {<h1>Relação de todos os produtos <span className='contador'>{number}</span></h1>}

            <div className='produto__card__container__prod'>
                {produtos.length > 0 &&
                    produtos.map((produto) => (
                        <Card className='card' key={produto.id} title={produto.name} bordered={false} >
                            <p> Descrição: {produto.description}</p>
                            <p>Quantidade: {produto.quantity}</p>
                            <Button className='btn btn-detalhes' type='primary' onClick={() => history.push(`/detalhes/${produto.id}`)}>Detalhes</Button>
                        </Card>

                    ))}
                {!removeSpinning && produtos.length === 0 && (
                    <Spin className='loading' size='large' />
                )}
            </div>

        </div>
    )
}