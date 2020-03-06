import React, { Component } from 'react';
import thumbnail_logo from '../../assets/img/thumbnail_logo.png'
import { Link } from 'react-router-dom';
import './Home.css'; 

class Home extends Component { 
    render() { 
        return(
            <div className="mt-5" >
                <div className="card" >
                    <div className="img-home">
                        <img src={thumbnail_logo} className="rounded mx-auto d-block" alt="..." />
                    </div>
                <div className="card-body" >
                    <h1 className="text-center">Bienvenido Candidato 01</h1>
                    <div className="text-center mt-4" >
                        <Link className="btn btn-primary btn-lg" to={"/articulos"} >Continuar</Link>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Home;