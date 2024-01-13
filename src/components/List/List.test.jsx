import { render, screen, within } from "@testing-library/react"
import List from "."
import { testUsers } from "../../constants/testData"
import { expect, test } from "vitest"

// gönderilen her kullanıcı için body kısmına bir satır basılıyor mu_
it("gönderilen her kullanıcı için ekrana satır basılır.", () => {
    render(<List users={testUsers} />)

    //tbody'yi al
    const body = screen.getByTestId("body")

    // tbody içindeki tr'leri seç 
    // belli bir kapsayıcı içindeki elemanları seçmek için within kullanılır
    const rows = within(body).getAllByRole("row");

    //dizideki kullanıcı sayısı kadar satır var mı?
    expect(rows).toHaveLength(testUsers.length);
})

// name, mail, yaş hücreleri users verisine göre ekrana basılıyor mu?
it("her bir kullanıcı için email, isim ve yaş hücreleri bulunur", () => {
    render(<List users={testUsers} />);

    //dizideki her bir kullanıcı için ekrana bu kullanıcının değerlerini içeren tablo hücresi basılır.
    for (const user of testUsers) {
        // kullanıcn ismini içeren tablo hücresini al
        screen.getByRole('cell', { name: user.name });

        // kullanıcının mailini içeren tablo hücreisni al
        screen.getByRole('cell', { name: user.email });

        // kullanıcının yaşını içeren tablo hücreisni al
        screen.getByRole('cell', { name: user.age });
    }
})
