import NavBar from "./navBar";


interface LayoutProps {
    children?:any
}

const Layout = (props: LayoutProps) =>{

    return(
        <div className="h-screen">
            <NavBar/>
            <div>
                {props.children}
            </div> 
        </div>
    )
}

export default Layout;