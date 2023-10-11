import Navbar from "../Home/components/Navbar/Navbar";

export const Layout = ({children}: any) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}
