import React from 'react'
import '../components/Bd.css'
import Img1 from '../imgs/img1.jpg'
import Img2 from '../imgs/img2.jpg'
import Img3 from '../imgs/img3.jpg'
import Card from '../components/Card'
const bd = () => {

    const dados = [
        {
            "id": "01",
            "nome": "Banana Nanica",
            "descricao": "Banana Doce mais macia",
            "foto": Img1
        },
        {
            "id": "02",
            "nome": "Banana Caturra",
            "descricao": "Banana mais amarga",
            "foto": Img2
        },
        {
            "id": "01",
            "nome": "Banana Prata",
            "descricao": "Banana Mais dura que o normal",
            "foto": Img3
        }
    ]

    return (

        <Card dados ={dados}/>
    )
}

export default bd