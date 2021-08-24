document.querySelector(".find-jobs").addEventListener("click",()=>{
    let text=document.getElementById("filter-jobs").value;
    getJobs().then(jobs=>{
        let filterJobs=filteredJobs(jobs,text);
        showJobs(filterJobs)
    })
})
function getJobs(){
     return fetch("data.json")
    .then(response=>response.json())
    .then(data=>{
        
        return data
    })
}
function showJobs(jobs){
    let jobsContainer=document.querySelector(".jobs-container")

    let jobsHTML=""
    jobs.forEach(job=>{
         console.log(job)
        jobsHTML+=`
        <div class="job-tile">
        <div class="top">
            <img src="${job.logo}"/>
            <span class="material-icons more_horiz ">more_horiz</span>
        </div>
        <div class="title">
            <span>${job.roleName}</span>
        </div>
        <div class="description">
            
            <p>${job.requirements.content}</p>

        </div>
        <div class="buttons">
            <div class="button applynow">
            
                    Apply Now
            
            </div>
            <div class="button Message">
        
                 Message 
                
            </div>

    
        </div>
    </div>
        
        
        
        `

    })
    jobsContainer.innerHTML=jobsHTML
}
getJobs( ).then(data=>{
 showJobs(data)
});
function filteredJobs(jobs,searchText){
    if(searchText){
        let filteredText=jobs.filter(job=>{
             if(job.roleName.toLowerCase().includes(searchText)
                ||job.type.toLowerCase().includes(searchText)
                ||job.company.toLowerCase().includes(searchText)
                ||job.requirements.content.toLowerCase().includes(searchText)){
                    return true;

             }
             else{
                 return false;
             }
        })
        return filteredText;
    }
    else{
        return jobs;
    }
}