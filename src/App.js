import React, { useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [selectedFile, setSelected] = useState(null)
  const onClickHandler = () => {
    const data = new FormData()
    data.append('file', selectedFile)
    axios.post('http://localhost:8000/upload', data, {})
      .then(({ data }) => console.log(data.data))
      .catch(err => console.log(err))

  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form method="post" action="#" id="#">




              <div className="form-group files">
                <label>Upload Your File </label>
                <input type="file" className="form-control" onChange={e => setSelected(e.target.files[0])} />
              </div>
              <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button>

            </form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
