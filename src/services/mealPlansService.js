export const getAll = async () =>{
    // return fetch('https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans.json')
    // .then(res => res.json())
    // .catch(error => console.log(error));
    let allMealPLans = await fetch('https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans.json').catch(err => {console.log(err)});

    let data = await allMealPLans.json();

    // console.log(Object.keys(data).map(key => ({key, ...data[key]})));

   return Object.keys(data).map(key => ({key, ...data[key]}));
}

export const getDetails = async(id) =>{
    let details = await fetch(`https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans/${id}.json`).catch(err => {console.log(err)});
    return await details.json();
}

export const createMeal = async (meal) => {
    console.log(JSON.stringify(meal));
    return fetch('https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meal)
    }).catch(err => {console.log(err)});
}

export const updateMeal = async (meal, id) => {
    console.log(JSON.stringify(meal));
    return fetch(`https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans/${id}.json`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(meal)
    }).catch(err => {console.log(err)});
}

export const deleteMeal = async (id) => {
    return await fetch(`https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans/${id}.json`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
}