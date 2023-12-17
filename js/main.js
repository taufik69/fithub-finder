const inputfield = document.querySelector('#inputfield');
const searchbtn = document.querySelector('#searchbtn');
const output = document.querySelector('#output');

/**
 * todo : adding funcitonality in searchbtn 
 */

searchbtn.addEventListener('click' , finder);


/**
 * @function finder (params:none){}
 * @api : https://api.github.com/users/
 */

async function finder (){
  try {
    if(inputfield.value != "") {
        const githubData = await axios.get(`https://api.github.com/users/${inputfield.value}`);
        const {data} = githubData;
        let outputinfo = `
        <div class="card mb-3 w-100">
                    <div class="row g-0">
                      <div class="col-md-6">
                        <img src="${data.avatar_url}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-6">
                        <div class="card-body">
                          <h5 class="card-title">${data.name}</h5>
                          <p class="card-text">${data.bio}</p>
                          <p class="card-text"><small class="text-muted"> github usename ${data.login}</small></p>
                          <p class="card-text"><small class="text-muted"> Twiterr/X username${data.twitter_username}</small></p>
                          <a href="${data.html_url} target= "_blank">github link</a>
                          <button type="button" id="searchbtn" class="btn btn-success p-3 mt-5">github follwer ${data.followers_url} </button>
                        </div>
                      </div>
                    </div>
            </div>`

     output.innerHTML = outputinfo;
     console.log(data);
    }else{
        throw new Error("input blank")
    }
  } catch (error) {
    console.log(error)
  }
}




