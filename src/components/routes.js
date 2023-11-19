import Cources from "./Cources"
import MainCource from "./MainCource"
import About from "./About"
import Login from "./Login"
import Panel from "./Panel"
import Dashbord from "./Dashbord"
import PrivatRoute from "./PrivatRoute"


let routes=[
    {path:'/cources', element:<Cources/>},
    {path:'/cource/:courceId', element:<MainCource/>},
    {path:'/About/*', element:<About/>, children:[
        {path:'setting', element:<h1 style={{textAlign:"center", color:"red"}}>Setting Page</h1>},
        {path:'Dashboard' ,element:<h1 style={{textAlign:"center", color:"red"}}>Dashboard Page</h1>}

    ]},
    {path:'/login', element:<Login/>},
    {path:'/*', element:<PrivatRoute/>, children:[
        {path:'panel', element:<Panel/>}, 
        {path:'dashbord', element:<Dashbord/>}
    ]}
    ,

]

export default routes;














  
  
