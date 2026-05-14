import styled from "styles" ;
import img from '../images/Loginimage.png'

const BGimg = styled.div`
    background-image: url(${img});
    background-position: center bottom;
    background-size: cover;
    width: 100%;
    /* Use min-height so content isn't cut off on small screens */
    min-height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    box-sizing: border-box;
`;

const Container = styled.div`
    /* Changed from 30% to a responsive width */
    width: 100%;
    max-width: 450px; 
    margin: auto;
    border: 2px solid #ffffff;
    border-radius: 12px;
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px); /* Optional: adds a nice frosted glass effect */
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 90%;
    margin: 2em auto;
`;

const FormDiv = styled.div`
    display: flex;
    flex-direction: column; /* Stack on mobile */
    font-family: 'Montserrat', sans-serif;
    gap: 0.5em;
    font-size: 1.2em;
    width: 100%;
    text-shadow: 2px 2px 6px black;
    color: #ffffff;
    font-weight: 500;

    @media (min-width: 600px) {
        flex-direction: row; /* Side-by-side on desktop */
        align-items: center;
        justify-content: space-between;
        gap: 1em;
    }

    & label {
        @media (min-width: 600px) {
            width: 30%;
            text-align: right;
        }
    }
`;

const Input = styled.input`
    padding: 0.5em;
    font-size: 1.1rem;
    width: 100%; /* Full width for the container/stack */
    background-color: transparent;
    border: none;
    border-bottom: 3px solid #0048ff;
    color: #ffffff;
    box-sizing: border-box;

    @media (min-width: 600px) {
        width: 65%;
    }

    &:focus {
        outline: none;
        border-bottom: 3px solid #0091ff;
        transition: all 0.3s ease;
    }
`;

const LoginBtn = styled.button`
    margin: 1em auto;
    padding: 0.5em;
    font-size: 1.2em;
    background-color: #2b8aaa;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 80%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #0091ff;
        box-shadow: 0 4px 12px rgba(0, 145, 255, 0.4);
    }
`;

function Login() {
    return (
        <BGimg>
            <Container>
                <u style={{ color: 'red' }}>
                    <h1 style={{ color: 'white', fontSize: '3em', paddingBottom: '5px',fontFamily: 'Montserrat', fontWeight: '700' }}>Login</h1>
                </u>
                <Form>
                    <FormDiv>
                        <label htmlFor="username">Username:</label>
                        <Input type="text" id="username" placeholder="Username" />
                    </FormDiv>
                    <FormDiv>
                        <label htmlFor="password">Password:</label>
                        <Input type="password" id="password" placeholder="Password" />
                    </FormDiv>
                    <LoginBtn type="submit">Login</LoginBtn>
                </Form>
            </Container>
        </BGimg>
    );
}

export default Login;