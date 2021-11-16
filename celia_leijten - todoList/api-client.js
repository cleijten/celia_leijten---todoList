
const base_endpoint = "http://localhost:3000/";

const getToDos = async () => {
 
  const APIEndpoint = `${base_endpoint}`;
  try {
    const res = await fetch(APIEndpoint, { method: "GET",
  headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}  });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const postToDo = async (task) => {
  
  const APIEndpoint = `${base_endpoint}`;
  const data = { description: task, done: false };
  
  try {
    const res = await fetch(APIEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}


const deleteToDo = async (id) => {
  
  const APIEndpoint = `${base_endpoint}${id}`;
  
  // try {
    const res = await fetch(APIEndpoint, {
      method: "DELETE"
    
    });

}


const putToDo = async (id) => {
  
  const APIEndpoint = `${base_endpoint}${id}`;
  const data = { done: true };
  
  try {
    const res = await fetch(APIEndpoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

