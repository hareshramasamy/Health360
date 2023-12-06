import Food from '../models/food-log/food.js';

export const getFood =  async (userId, type, date) => {
    const food = await Food.find({ userId, mealType: type, date });
    return food;
}

export const save = async (newFood) => {
    const food = new Food(newFood); 
    return food.save();
}