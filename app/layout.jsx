// create layout .jsx file for next app

import Nav from '@/components/Nav'
import '@styles/globals.css'

const RootLayout = ({ children }) => {


    return ( 
        <html>
            
            <body>
            <Nav />
            <main>
                
                {children}
            </main>
            </body>
        </html>
    )
}

export default RootLayout