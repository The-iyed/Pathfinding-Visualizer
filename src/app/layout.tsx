import './globals.css'
export const metadata = {
  title: 'Pathfinding Visualizer',
}
import { AppProvider } from './ActionContext'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <> 
    <AppProvider>
       <html lang="en">
      <body>
        {children}
        </body>
    </html>
    </AppProvider>
    </>
   
   
  )
}
