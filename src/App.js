import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Container } from 'react-bootstrap';

import Input from './Components/Input';
import Boton from './Components/Boton';

function App()
{
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState(false);

    const changePassword = (e) =>
    {
        setPassword(e.target.value);

        if (e.target.value === '252525')
        {
            setError(true);

            return;
        }

        setError(false);
    }

    return (
        <div className="App">
            <Container>
                <h1>Desafío de Estados y Componentes</h1>
                <Input
                    nombre={nombre}
                    setNombre={setNombre}
                    password={password}
                    setPassword={setPassword}
                    changePassword={(e) => changePassword(e)}
                />
                { error ? <Boton /> : null }
            </Container>
        </div>
    );
}

export default App;
