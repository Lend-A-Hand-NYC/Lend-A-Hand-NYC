const Post = require('../models/Pos');

exports.addPost = async (req, res) => {
    console.log(req.body);
    const { event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed } = req.body;
    const posData = await Post.create(event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed);
    res.send(posData);
}

exports.getPosts = async (req, res) => {
    try {
        const postsData = await Post.getAll();
        res.json(postsData); 
    } catch (err) {
        console.error('Error fetching posts:', err);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
};

exports.updatePost = async (req,res) => {
try{
    const id =  Number(req.params.id);
    console.log("REQ BODY", req.body); 
    const { event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed } = req.body;
    const posData = await Post.updatePost(event_title, event_info, commitment_type, skills, address, city, state, zip, event_date, event_time, volunteers_needed,id);
    res.send(posData);

} catch (err) {
console.error('Error updating posts:', err);
res.status(500).json({ error: 'Failed to update post' });
}
}

exports.deletePost = async (req,res) => {
    try{
        console.log(req.body); 
        const id =  Number(req.params.id);
        const posData = await Post.delete(id);
    
        res.send(posData);
    
    } catch (err) {
    console.error('Error updating posts:', err);
    res.status(500).json({ error: 'Failed to update post' });
}
}



// const Post = require('../models/Pos')
// exports.addPost = async (req, res) => {
//     console.log(req.body);
//     const {event_title,event_info,commitment_type,skills,address, city,state, zip, event_date, event_time, volunteers_needed} = req.body;
//     console.log(event_title,event_info,commitment_type,skills,address, city,state, zip, event_date, event_time, volunteers_needed);
//     const posData = await Post.create(event_title,event_info,commitment_type,skills,address, city,state, zip, event_date, event_time, volunteers_needed);
//     res.send(posData);

// }

