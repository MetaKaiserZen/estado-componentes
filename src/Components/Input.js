import { Form } from 'react-bootstrap';

const Input = ({ nombre, setNombre, password, setPassword, changePassword }) =>
{
    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    id="nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                    placeholder="Ingrese su nombre"
                    autoComplete="false"
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="text"
                    id="password"
                    onChange={(e) => changePassword(e)}
                    value={password}
                    placeholder="Ingrese su contraseña"
                    autoComplete="false"
                />
            </Form.Group>
        </Form>
    );
}

export default Input
