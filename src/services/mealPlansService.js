export const getAll = async () =>{
    // return fetch('https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans.json')
    // .then(res => res.json())
    // .catch(error => console.log(error));
    let allMealPLans = await fetch('https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans.json');

    let data = await allMealPLans.json();

    // console.log(Object.keys(data).map(key => ({key, ...data[key]})));

   return Object.keys(data).map(key => ({key, ...data[key]}));
}

export const getDetails = async(id) =>{
    let details = await fetch(`https://my-users-aa933-default-rtdb.europe-west1.firebasedatabase.app/mealPlans/${id}.json`);
    return await details.json();
}