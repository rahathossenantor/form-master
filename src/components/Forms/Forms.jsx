import { useState } from "react";

const Forms = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(nameState.inputValue);
        console.log(emailState.inputValue);
        console.log(passState.inputValue);
    }

    const useFormState = (defaultVal = null) => {
        const [inputValue, setInputValue] = useState(defaultVal);

        const handleInputValueChange = (event) => {
            setInputValue(event.target.value);
        }

        return {
            inputValue,
            handleInputValueChange
        }
    };

    const nameState = useFormState("Md Rahat Hossen Antor");
    const emailState = useFormState(null);
    const passState = useFormState(null);
    
    // const [name, setName] = useState("Md Rahat Hossen Antor");
    // const [email, setEmail] = useState(null);
    // const [pass, setPass] = useState(null);

    // const handleNameChange = (event) => {
    //     setName(event.target.value);
    // }
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // }
    // const handlePassChange = (event) => {
    //     setPass(event.target.value);
    // }

    return (
        <div>
            <h2 className="text-3xl">Registration</h2>
            <form className="p-5" onSubmit={handleFormSubmit}>
                <input onChange={nameState.handleInputValueChange} type="text" name="name" defaultValue={nameState.inputValue} placeholder="Your name" className="input input-bordered w-full" />
                <br />
                <input onChange={emailState.handleInputValueChange} type="email" name="email" placeholder="Your email" className="input input-bordered w-full" />
                <br />
                <input onChange={passState.handleInputValueChange} type="password" name="pass" placeholder="Your password" className="input input-bordered w-full" />
                <br />
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Forms;