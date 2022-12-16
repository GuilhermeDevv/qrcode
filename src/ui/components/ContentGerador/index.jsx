import React, { useState } from 'react';
import erros from './error.module.css'
import { Container, ContainerImg, ContainerInput, Content, Form, Input, MainText, MsgError } from '../../styles/ContentStyled';
//
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
//



const schema = yup.object({
    url: yup.string().required('Campo vazio.')
}).required()


export function ContentGerador() {
    const [img, setImg] = useState('')

    function request({ url }) {
        setImg(`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${url}`)
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    return (
        <Content>
            <Container>
                <MainText>Gerador de QR CODE</MainText>
                <Form onSubmit={handleSubmit(request)}>
                    <ContainerInput>
                        <Input
                            autoComplete='off'
                            type="text"
                            placeholder='URL'
                            {...register('url')}
                            className={errors.url?.message ? erros.error : erros.notError}
                        />
                        <MsgError>{errors.url?.message}</MsgError>
                    </ContainerInput>
                    <ContainerImg>
                        {img && <img src={img} alt="qrcode" />}
                    </ContainerImg>
                    <ContainerInput>
                        <Input type="submit" value="Gerar QR CODE" />
                    </ContainerInput>
                </Form>
            </Container>
        </Content >
    );
}

