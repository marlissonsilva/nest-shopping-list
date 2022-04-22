import './style.css'

import React, { useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'

import { message, Form, Input, Button, InputNumber } from 'antd'

export default function AdicionarProduto() {

    const [disabled, setDisabled] = useState(false)
    const history = useHistory()

    async function handleSubimit(produto) {
        setDisabled(true)
        api.post('/item', produto)
            .then((response) => {
                if (response.status === 201) {
                    message.success('Produto adcionado com sucesso!');
                    history.push('/produtos') // empurra para a lista de itens
                }
            }).catch((err) => {
                message.error('Deu algo errado ao adicionar o produto ' + err.response.data.message)
            })

    }

    return (
        <div className='produto__container'>
            <h1>Adicionar novo produto</h1>
            <div>
                <Form className='form'
                    name='submitProduto'
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleSubimit}
                    autoComplete='off'
                >
                    <Form.Item
                        label='Nome do item'
                        name='name'
                        rules={[{ required: true, message: 'O nome do item não pode ser vazio' }]}
                    >
                        <Input />

                    </Form.Item>

                    <Form.Item
                        label='Descrição'
                        name='description'
                        rules={[{ required: true, message: 'Insira a descrição do item' }]} // deixa o campo como obrigatório
                    >
                        <Input />

                    </Form.Item>

                    <Form.Item
                        label='Quantidade'
                        name='quantity'
                        rules={[{ required: true, message: 'Insira a quantidade' }]}
                    >
                        <InputNumber /> 
                        {/* vai aceitar apenas números  */}


                    </Form.Item>

                    <Form.Item className='btn'>
                        <Button type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>

                </Form>
            </div>

        </div>
    )
}