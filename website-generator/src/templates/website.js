import React from "react"

export default ({ pageContext: { website } }) => {
  return (
    <div>
      <h1>{website.companyInformation.title.value}</h1>
      <h3>{website.companyInformation.description.value}</h3>
      <h4>{website.companyInformation.email.value}</h4>
      <h4>{website.companyInformation.phone.value}</h4>
    </div>
  )
}
