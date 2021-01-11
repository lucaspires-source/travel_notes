import React from 'react'
import { Container, Button, SelectForm, Label, InputLocal, InputData,Labels } from './styles'
const CardsArea: React.FC = () => {
    return (
        <Container>
            <Label>País
            <SelectForm>
                    <option value="" disabled selected>Selecione..</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </SelectForm>
            </Label>
            <Label>Local
                <InputLocal type="text" placeholder="Digite o local que deseja conhecer" />
            </Label>
            <Label>Metas
                <InputData type="text" placeholder="mês/ano" />
            </Label>
            <Labels>Botão
                <Button>Adicionar</Button>
            </Labels>
        </Container>
    )
}

export default CardsArea