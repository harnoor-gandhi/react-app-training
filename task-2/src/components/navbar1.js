import './navbar.css'
export function Navbar() {
    return (
        <nav>
            <img src={"https://images.ctfassets.net/8j5aqoy0ts8s/4jySPaEh2mr01RvfkuQoKf/4fe9e1602b683afb023d7a475f19bda1/logo-guideline-2_2x_170912_043411.png"} alt="atlassian " height="105px" width="200px"></img>
            <ul>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="drop">Products<i class=""></i></a>
                    <div class="dropdown-content">
                        <a href="#">Jira Board</a>
                        <a href="#">CEQ Projects</a>
                      
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="drop">Dashboards<i class=""></i></a>
                    <div class="dropdown-content">
                        <a href="#">python</a>
                        <a href="#">Javascipt</a>
                        <a href="#">React</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="drop" style={{"margin-right":'40px'}}>Teams<i class="hi"></i></a>
                    <div class="dropdown-content">
                        <a href="#">New Relic</a>
                        <a href="#">Devops </a>
                        <a href="#">Cloud Security</a>
                    </div>
                </li>
            </ul>
            <button type="button" style={{"margin-top":'40px',"margin-right":""}}>Try Now</button>
            
             
            <button type="button" style={{"margin-right":"10px","text-align":"center","font-family":"Arial","color":"black","background-color":"white"}}>Login Here</button>
        </nav>
    )
}