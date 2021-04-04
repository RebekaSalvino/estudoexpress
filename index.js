const express = require('express');
const app = express();
const { v4:uuidv4 } = require('uuid')

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
   // const { title, owner } = request.query;
   
   
    return response.json(projects)
        
    
});
app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
      
    const project = { id: uuidv4(),title, owner};

    projects.push(project); 
    return response.json(project);

    
})
app.put('/projects/:id', (request, response) => {
    
    const {id} = request.params;
    const {title, owner} = request.body;
    
    const projectsIndex = projects.findIndex(project => projects.id === id);
    if (projectsIndex < 0) {
        return response.status(400).json({ error: 'Projeto não foi encontratdo'});
    }

    const project = {
        id,
        title,
        owner,
    }
    
     projects[projectsIndex] = project;  

   
    return response.json(project);
      
        
});
app.delete('/projects/:id', (request, response) => {
    const {id} = request.params
     const projectIndex = projects.findIndex(projects => project.id === id);

     if (projectIndex < 0) {
         return response.status(400).jason({ error:'Projeto não foi encontrado'});

     }
      
     projects.splice(projectIndex, 1);

    return response.status(204).send();
        
    
});

app.listen(3333);