import { screen, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import user from '@testing-library/user-event';

it("Uygulama doğru çalışıyor.", async () => {

    render(<App />)
    user.setup();

    //call, requirement element
    const nameInp = screen.getByLabelText("Name");
    const mailInp = screen.getByLabelText("Email");
    const ageInp = screen.getByLabelText("Age")
    const sendBtn = screen.getByRole("button", { name: "Add User" })

    // 1- fill the inputs
    await user.type(nameInp, "gokce")
    await user.type(mailInp, "gokce@gmail.com")
    await user.type(ageInp, "26")

    // 2- Click, addUser
    await user.click(sendBtn)

    // 3- table cells are rendered on the screen, in accordance with the data we entered in the inputs.
    screen.getByRole("cell", { name: "gokce" })
    screen.getByRole("cell", { name: "gokce@gmail.com" })
    screen.getByRole("cell", { name: "26" })
})


