import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HelloWorld from './hello-world/HelloWorld.jsx'
import Container from './Container/Container.jsx'
import Table from './Todo/Table.jsx'
import AlertButton from './Button/AlertButton.jsx'
import MyButton from './Button/MyButton.jsx'
import Toolbar from './Button/Toolbar.jsx'
import SearchForm from './form/SearchForm.jsx'
import SayHello from './form/SayHello.jsx'
import Counter from './form/counter.jsx'
import "./card/Card.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container>
      <HelloWorld/>
      <Table/>
      <AlertButton text="alert button" massage="masbro"/>

      <MyButton text="Hit me!" onSmash={() => alert("maass")} />
      <MyButton text="Hit me!" onSmash={() => alert("brooo")} />

      <Toolbar onClick={(e) =>{
        e.stopPropagation(); alert("Toolbar clicked")}}/>

        <SearchForm/>

        <SayHello/>
        <Counter/>
        <Counter/>
    </Container>
  </StrictMode>,
)
