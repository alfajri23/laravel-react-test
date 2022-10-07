import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

const Home = () => {

    let url_backend = `https://backend-lms.mysch.web.id/`;
    let url_data = `api/data/master/sekolah/search/by/domain/sekolah/`;
    let host = 'mysch.web.id';
    
    // State
    let [program, setProgram] = useState([]);
    let [sekolah, setSekolah] = useState({});
    let [slider, setSlider] = useState([]);

    useEffect(() => {
        Promise.all([
            fetch(`${url_backend}${url_data}${host}`, {
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin':'*',
                  'mode': 'no-cors',
                }
              }),
            fetch(`${url_backend}api/data/master/program/program/all/aktif`, {
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin':'*',
                  'mode': 'no-cors',
                }
              }),
            fetch(`${url_backend}api/data/master/slider/sekolah/${localStorage.getItem("id_sekolah")}`, {
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin':'*',
                  'mode': 'no-cors',
                }
              })
          ]).then(allResponses => {
            allResponses[0].json()
            .then(data => {
                setSekolah(data.data)
                localStorage.setItem("id_sekolah", data.data.id);
            });
            allResponses[1].json()
            .then(data => {
                setProgram(data.data);
            });
            allResponses[2].json()
            .then(data => {
                setSlider(data.data);
            });
        })

        
    },[]);

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/about'>About</Link>
                    </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div>
                    { slider.length == 0 ? 
                        <div className="d-flex justify-content-center py-5 my-5">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> :
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                { slider.map((e,key)=>{ 
                                    return (
                                            <div key={key} className={`carousel-item ${key == 0 ? 'active' : ''}`}>
                                                <img src={e.file} className="d-block w-100" alt="..."/>
                                            </div>
                                        )
                                    })
                                }       
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    }
                    
                </div>

                <div className="container">
                    <div className="row">
                    { program.map((e,key)=>{ 
                        return (
                            <div key={key} className="col-3 p-4">
                                <div className="card px-5">
                                    <img src={e.file} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{e.nama}</h5>
                                        <p>{key}</p>
                                    </div>
                                </div>
                            </div>
                        )
                        })
                    }   
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;