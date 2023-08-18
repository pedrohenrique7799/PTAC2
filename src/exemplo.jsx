import {Dev} from './dev'
export function Exemplo({lista}){
    return (
        <div>
            {lista.map(aluno, index)=(
                <ul key={index}>
                    <li>{aluno.nome}, {aluno.idade}, {aluno.cidade}</li>
                </ul>
            )}
            <Dev nome="Pedro"/>
        </div>
    );
}