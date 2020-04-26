exports.showJobs = (req, res) =>{
    res.render('home',{
        namePage:'talentDevs',
        tagline:'Find and publish jobs for web developers',
        bar:true,
        button:true
    })
}