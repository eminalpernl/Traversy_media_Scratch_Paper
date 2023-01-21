const express = require('express');
const router = express.Router();
const members = require('../../Members');
const uuid = require('uuid'); // this package creates random id number for the new members like DB does



// gets all members
router.get('/', (req,res)=>{        // when we make a request through the Postman app,
    res.json(members);                      // it gives all the members json file to us.
})

// get a single member

router.get('/:id',(req, res)=>{

    const found = members.some(member=>member.id === parseInt(req.params.id));
if (found) {
    res.json(members.filter(member => member.id===parseInt(req.params.id)))
} else {
    res.status(400).json({ msg: `No member with this ID of ${req.params.id}` })
}})

// we've added POST routing to the members.js file (https://youtu.be/L72fhGm1tfE?t=2497)

// Create Member // this gives us what we add in the postman

// router.post('/',(req, res)=>{
//     res.send(req.body)
// });

// module.exports = router

// Not ; when we add only this blok here, postman doesnt give us what we added. We need to add bodyparser
// to index.js.


// here we are gonna add new member to DB

router.post('/',(req, res)=>{
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    };

    if (!newMember.name || !newMember.email) {
       return res.status(400).json({ msg: 'Please include a name and email' });
    }

    members.push(newMember);
    res.json(members);
});

// update member(https://youtu.be/L72fhGm1tfE?t=3033)

// we are using PUT request to update

router.put('/:id',(req, res)=>{

    const found = members.some(member=>member.id === parseInt(req.params.id));

    if (found) {
        const updMember = req.body;
        members.forEach(member =>{
            if (member.id === parseInt(req.params.id)) {
                // member.name = req.body.name;    // the problem with this is, they may update just the name
                // member.email = req.body.email;  // or vice verse

                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({ msg: 'Member updated', member })
            }
        });
    } else {
        res.status(400).json({ msg: `No member with this ID of ${req.params.id}` })
    }
})


// delete member (https://youtu.be/L72fhGm1tfE?t=3366)

// we are using DELETE request

router.delete('/:id',(req, res)=>{

    const found = members.some(member=>member.id === parseInt(req.params.id));
if (found) {
    res.json({ msg: 'Member deleted', 
    members: members.filter(member => member.id !== parseInt(req.params.id))})
} else {
    res.status(400).json({ msg: `No member with this ID of ${req.params.id}` })
}})

module.exports = router