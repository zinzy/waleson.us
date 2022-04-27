import * as React from "react"
 
// data
const links = [
  {
    text: "Anja",
    url: "/anja",
    description:
      "Teacher of English specialized in cultural analysis, unparalleled cooking, and power tools", 
  },
  {
    text: "Zinzy",
    url: "/zinzy",
    description:
      "Product & Design Manager with a penchant for sharp pencils, personal sites, and monster movies", 
  },
]

// markup
const IndexPage = () => {
  return (
    <main className="">
      <title>Home Page</title>
            <h1 className="m-0 p-0 mb-5">Waleson.us</h1>
            <ul className="list-unstyled"> 
              {links.map(link => (
                <li className="" key={link.url}>
                  <a href={`${link.url}`}>{link.text}</a>
                </li>
              ))}
            </ul> 
    </main>
  )
}

export default IndexPage
