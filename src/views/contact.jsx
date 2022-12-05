const React = require("react")
const Def = require("./default")

function Contact (data) {
    return (
        <Def>
        <main>
            <h1>Contact Us</h1>
            <form method="POST" action="/places">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control" id="name" name="name" required />
                </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input className="form-control" id="description" name="description" />
              </div>
              <input className="btn btn-primary" type="submit" value="submit" />
            </form>
          </main>
        </Def>
    )
}

export default Contact;