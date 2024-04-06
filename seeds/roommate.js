const roommateData = require('../roommateData');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const createRoommate = async(knex, roommate) => {
  const roommateId = await knex('roommate').insert({
    name: roommate.name, 
    age: roommate.age,
    isSmoker: roommate.isSmoker,
    hasPets: roommate.hasPets,
    maxBudget: roommate.maxBudget,
    gender: roommate.gender,
    image: roommate.image,
    city: roommate.city, 
    bio: roommate.bio, 
    important: roommate.important
  }, 'id');

  return roommateId; 
}

exports.seed = async function(knex) {
  try{
    await knex('roommate').del()

     let roommatePromises = roommateData.map(data => {
    return createRoommate(knex, data);
  });
  return Promise.all(roommatePromises)
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
