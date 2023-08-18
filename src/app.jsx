import './app.css'
import { Exemplo } from './exemplo'
export default function App() {
    const listaAlunos = [
        {Nome:"Pedro", idade:16, cidade:"Nova Andradina"},
        {Nome:"Gustavo", idade:17, cidade:"Nova Andradina"},
        {Nome:"Luis", idade:16, cidade:"Batayporã"},
        {Nome:"Icaro", idade:16, cidade:"Nova Andradina"}
    ];
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista={listaAlunos}/>
      </div>
  
    );
  }