import * as React from "react"
 
// data
const links = [
  {
    text: "Website",
    url: "https://anjawaleson.notion.site/anjawaleson/Anja-Waleson-0182c8df804b4b12ab6e70b5b5795a55",
  },
  {
    text: "Goodreads",
    url: "https://www.goodreads.com/user/show/109871240-anja-waleson",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/anjawaleson",
  }, 
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/anjawaleson",
  }, 
]

// markup
const AnjaPage = () => {
  return (
    <main>
      <title>anja.waleson.us</title>
            <div className="mb-5">
              <a href="/">← Waleson.us</a>
            </div>
      <h1>Anja Waleson</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis lacus neque, ut congue nulla dictum vitae. Sed tempus est vel lobortis vestibulum. Nullam eu quam posuere, aliquam velit ut, iaculis nisl. Nulla facilisi. Vivamus fermentum neque sit amet lacus posuere feugiat. Quisque sed tincidunt enim.</p>
          <ul className="list-unstyled mt-5"> 
            {links.map(link => (
              <li key={link.url}>
                <span>
                  <a href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                </span>
              </li>
            ))}
          </ul>
    </main>
  )
}

export default AnjaPage
