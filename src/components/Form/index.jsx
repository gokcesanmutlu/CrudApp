const Form = ({ addUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Formdaki inputlardan bir obje oluştur
    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries());
    console.log(newUser)


    //kullanıcıyı listeye ekle
    addUser(newUser);

    // Formu sıfırla
    e.target.reset();
  }
  return (
    <form onSubmit={handleSubmit} className="my-5">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Ex: John" />
      </div>

{/*  if you want to use, getByLabelText > input and label must be connected */}
      <div className="my-4">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="form-control"
          placeholder="Ex: jhon@gmail.com" />
      </div>

      <div className="my-4">
        <label htmlFor="age">Age</label>
        <input type="number"
          id="age"
          name="age"
          className="form-control"
          placeholder="Ex: 28" />
      </div>

      <button>Add User</button>
    </form>
  )
}

export default Form