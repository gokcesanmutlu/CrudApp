import { render, screen } from "@testing-library/react"
import Form from "."
import user from "@testing-library/user-event"
import { expect } from "vitest";

it("form gönderilince addUser doğru parametreler ile çalışıyor mu", async () => {

    // fonk.ları prop olarak gönderirken mock işlemi yapıyorduk, mock işlemi yapmak vite kütüphanesi kullanılırken, cra'dan biraz farklı*
    // fonksiyonu mock'lama // mock fonk. = taklitçi fonk, asıl fonksiyonun işlevini yapmak yerine boş bi taklitçi fonk bu
    // bu fonk sayesinde, fonk ne zaman çağırıldı, hangi parametreler ile çağırıldı gibi testleri yapıyorum.
    const mock = vi.fn();

    render(<Form addUser={mock} />)

    // useri import ettiğimiz için doğrudan kullabildik ama userEventi import etseydik değişkene aktarmamız gerekirdid
    user.setup();

    // call the requirement element
    const nameInp = screen.getByLabelText("Name")
    const mailInp = screen.getByLabelText("Email")
    const ageInp = screen.getByPlaceholderText("Ex: 28")
    const sendBtn = screen.getByRole("button")

    // fill the inputs
    // 1. yol(isim inputunu doldur)
    await user.click(nameInp);
    await user.keyboard("gokce");

    // 2.yol (mail inputunu doldur)
    //(fireevennte input diye geçiyo burda type diye geçiyo, type inputa bir şey doldurmaya yarar ve iki param alır 
    // birincisi hangi inputa yazacağımız, ikincisi de içine yazacağımız yazı)
    await user.type(mailInp, "gokce@gmail.com")

    // age inputunu doldur
    await user.type(ageInp, "30")

    // click to submit  button
    await user.click(sendBtn);

    // is function called with true params? (add user fonk. doğru param ile çağrıldı mı)
    expect(mock).toBeCalledWith({
        // burda email fırat@gmail.com olsa testten kalırsın çünkü özel karakter olduğundan email kabul etmicek bunu
        name: "gokce",
        email: "gokce@gmail.com",
        age: "30",
    })
})