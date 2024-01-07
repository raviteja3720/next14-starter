import Link from "next/link"

function Notfound() {
  return (
    <div>
        <h3>Not found</h3>
        <p>Sorry the page you are looking does not exit </p>
      <Link href="/">Return to home</Link>
    </div>
  )
}

export default Notfound
