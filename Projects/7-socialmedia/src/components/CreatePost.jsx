const CreatePost = () =>{
return <forNamem>
  <div className="mb-3">
    <label forName="exampleInputEmail1" className="forNamem-label">Email address</label>
    <input type="email" className="forNamem-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="forNamem-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label forName="exampleInputPassword1" className="forNamem-label">Password</label>
    <input type="password" className="forNamem-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 forNamem-check">
    <input type="checkbox" className="forNamem-check-input" id="exampleCheck1"/>
    <label className="forNamem-check-label" forName="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</forNamem>
}

export default CreatePost;