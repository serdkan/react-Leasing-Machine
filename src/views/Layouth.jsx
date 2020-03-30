import React, { Component } from 'react'
import Ustmenu from './Navbar'
import StokKarti from './StokKarti'
import Dashboard from './DashBoard'
import {BrowserRouter as Router,Route} from 'react-router-dom';

 class layouth extends Component {
    render() {
        return (
            <Router>
            <div>
                 <Ustmenu></Ustmenu>
                 <Route path="/Stokkarti" component={StokKarti}/>
                 <Route path="/Dashboard" component={Dashboard}/>   
            </div>
            </Router>
        )
    }


}

export default layouth;