import React from 'react'
import { cookies } from 'next/headers';
// dynamic rendering

const AboutPage = async() => {
    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')
    console.log(theme)
  return (
    <div>AboutPage</div>
  )
}

export default AboutPage