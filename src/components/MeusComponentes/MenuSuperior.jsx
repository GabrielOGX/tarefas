import { Link } from "react-router-dom";
const MenuSuperior = () => {
    return(
        <nav className="navbar navber-expand-sm bg-primary navbar-dark sticky-top">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Controlo de Tarefas
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-item">
                            Incluir Tarefa
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/manutencao" className="nav-item">
                            Manutenção de Tarefas
                        </Link>     
                    </li>
                    <li className="nav-item">
                        <Link to="/usuario" className="nav-item">
                            Cadastrar Usuário
                        </Link>     
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default MenuSuperior;