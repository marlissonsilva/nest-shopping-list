import React, { useEffect, useState } from "react";
import api from '../../services/api'

import { useParams, useHistory } from "react-router-dom";
import './style.css'

import { Card, message, Button, Modal } from "antd";
import { ExclamationCircleOutlined  } from '@ant-design/icons';

export default function DetalhesProduto() {

    const history = useHistory()
    const [produto, setProduto] = useState([])
    let { id } = useParams();

    const { confirm } = Modal;

        function showConfirm(produto) {
        confirm({
            title: 'Deseja mesmo excluir produto?',
            icon: <ExclamationCircleOutlined />,
            content: produto.name,
            onOk() {
                handleDelete(produto.id);
            },
            onCancel() {
                console.log('Cancel');
            },
        });
        }

    function handleDelete(id) {
        api.delete(`/item/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    message.success("Produto excluido com sucesso")
                    history.push('/produtos')
                }
            })
            .catch((err) => {
                message.error('Aconteceu um erro inesperado')
            })
    }

    useEffect(() => {
        api.get(`/item/${id}`)
            .then((response) => {
                setProduto(response.data)
            })
            .catch((err) => {
                message.error('Aconteceu um erro inesperado')
            })
    }, [])

    return (
        <div className='produto__container'>
            <h1>Detalhes do produto</h1>
            <div className="produto__card__container__det">
                <Card key={produto.id} title={produto.name} bordered={false} >
                    <p>Id: {produto.id}</p>
                    <p>UpdateAt: {produto.updatedAt}</p>
                    <p>Descrição: {produto.description}</p>
                    <p>Quantidade: {produto.quantity}</p>
                    <Button type="danger" onClick={()=> showConfirm(produto)} >Excluir produto</Button>
                </Card>
            </div>
        </div >
    )

}

