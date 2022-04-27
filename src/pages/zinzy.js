import * as React from "react"
 
// data
const links = [ 
  {
    text: "Website",
    url: "https://www.zinzy.website/",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/zinzy/",
  },
]

// markup
const ZinzyPage = () => {
  return (
    <main>
    <title>zinzy.waleson.us</title>
            <div className="mb-5">
              <a href="/">← Waleson.us</a>
            </div>
    <h1>Zinzy Waleson</h1>
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

export default ZinzyPage
