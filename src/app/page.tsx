import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.css';


export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 text-primary">
        Quiz Pertemuan 15
      </h1>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-success text-white">
              <h5 className="mb-0">Nama, NIM, Topik</h5>
            </div>
            <div className="card-body">
              <h2 className="card-title text-dark mb-4">
                <p>test</p>
              </h2>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">
                  <strong>Nama:</strong> Justin Benedikt
                </li>
                <li className="list-group-item">
                  <strong>NIM:</strong> 535240137
                </li>
                <li className="list-group-item">
                  <strong>Topik:</strong> Pokemon
                </li>
              </ul>
            </div>            
          </div>    
        </div>
      </div>
    </div>
  );
}
