import style from './style.module.scss'
import Item from "./Item";
import { ITarefa } from '../../types/tarefa';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2> 
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        key={item.id}
                        id={item.id}
                        tarefa={item.tarefa}  
                        tempo={item.tempo}  
                        selecionado={item.selecionado}
                        completado={item.completado}
                        selecionarTarefa={selecionaTarefa}
                    /> 
                ))}
            </ul>
        </aside>
    )
}

export default Lista;